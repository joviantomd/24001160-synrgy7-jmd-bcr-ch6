import { Response, Request, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  createUser,
  getAllUser,
  getUserByEmail,
  getUserById,
  updateUsers,
  deleteUser,
} from "../services/userService";

const SALT = 10;

declare global {
    namespace Express {
        interface Request {
            user?: { id: number };
        }
    }
}

function encryptPassword(password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, SALT, (err, encryptedPassword) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(encryptedPassword);
    });
  });
}

function checkPassword(
  encryptedPassword: string,
  password: string
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, encryptedPassword, (err, isPasswordCorrect) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(isPasswordCorrect);
    });
  });
}

function createToken(payload: object): string {
  return jwt.sign(payload, process.env.JWT_SIGNATURE_KEY || "Rahasia");
}

export const registerUser = async (req: Request, res: Response) => {
  const email = req.body.email.toLowerCase();
  const encryptedPassword = await encryptPassword(req.body.password);
  const name = req.body.name;
  const role = req.body.role
  console.log(req.body)
  try {
    const user = await createUser({ email, password: encryptedPassword,name ,role });
    
    res.status(201).json({
      id: user.id,
      email: user.email,
      password: user.password,  
      name: user.name,
      role: user.role
      // createdAt: user.createdAt,
      // updatedAt: user.updatedAt,
    });
  } catch (error) {
    res.status(404).json({ message: "Data tidak berhasil diinput.",error: error });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const email = req.body.email.toLowerCase();
  const password = req.body.password;

  const user = await getUserByEmail(email);

  if (!user) {
    res.status(404).json({ message: "Email tidak ditemukan." });
    return;
  }

  console.log(user.email);
  console.log(user.password);

  const isPasswordCorrect = await checkPassword(user.password, password);

  if (!isPasswordCorrect) {
    res.status(404).json({ message: "Password salah." });
    return;
  }

  const token = await createToken({
    id: user.id,
    email: user.email,
    // createdAt: user.createdAt,
    // updatedAt: user.updatedAt,
  });

  res.status(201).json({
    id: user.id,
    email: user.email,
    token: token, // Kita bakal ngomongin ini lagi nanti.
    // createdAt: user.createdAt,
    // updatedAt: user.updatedAt,
  });
};

export const whoAmI = async (req: Request, res: Response) => {
  res.status(200).json(req.user);
};

export const authorized = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bearerToken = req.headers.authorization;

    if (!bearerToken) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const token = bearerToken.split("Bearer ")[1];
    const tokenPayload = jwt.verify(
      token,
      process.env.JWT_SIGNATURE_KEY || "Rahasia"
    ) as jwt.JwtPayload;

    req.user = await getUserById(tokenPayload.id);
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({
      message: "Unauthorized",
    });
  }
};

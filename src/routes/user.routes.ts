import { Router, Request, Response } from "express";
import { authorized, loginUser, registerUser, whoAmI } from "../controllers/userControllers";
const router = Router();

// GET cars;
router.post("/register", registerUser);

router.post("/login", loginUser);

router.get('/whoami', authorized, whoAmI);


export default router;

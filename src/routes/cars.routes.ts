import { Router, Request, Response } from "express";
import knex from "knex";
import { CarsModel } from "../models/CarsModel";
import UploadImage from "../../middlewares/multer";
import cloudinary from "../../config/cloudinary";
import { getCars, getCarsbyId, createCars, updateCars, deleteCars } from "../controllers/carsController";
import { update } from "../repositories/carRepository";
import { authorized } from "../controllers/userControllers";
const router = Router();

// GET cars;
router.get("/", getCars);

// GET specific car by ID.
router.get("/:id", getCarsbyId);

// CREATE
router.post("/create",authorized, UploadImage.single('image'), createCars);

// UPDATE / EDIT.
router.put("/:id",authorized, UploadImage.single('image'), updateCars);

//  DELETE
router.delete("/:id",authorized, deleteCars);

export default router;

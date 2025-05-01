import express from "express";
import { adminController } from "../controllers/index.controller.js";
import { validateCreateUser } from "../middlewares/validateInput.middleware.js";
import checkUserAlreadyExists from "../middlewares/checkUserAlreadyExists.middleware.js";

const adminRouters = express.Router();

adminRouters.get("/allcode", adminController.getAllCode);
adminRouters.post(
  "/create-user",
  validateCreateUser,
  checkUserAlreadyExists,
  adminController.createUser
);

export default adminRouters;

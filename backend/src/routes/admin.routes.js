import express from "express";
import { adminController } from "../controllers/index.controller.js";
import { validateCreateUser, validateUpdateUser } from "../middlewares/validateUserFields.middleware.js";
import checkUserAlreadyExists from "../middlewares/checkUserAlreadyExists.middleware.js";

const adminRouters = express.Router();

adminRouters.get("/allcode", adminController.getAllCode);
adminRouters.post(
  "/create-user",
  validateCreateUser,
  checkUserAlreadyExists,
  adminController.createUser
);
adminRouters.get(
  "/get-users",
  adminController.getAllUsers
);
adminRouters.get(
  "/user/:id",
  adminController.getUserById
);
adminRouters.put(
  "/update-user/:id",validateUpdateUser,
  adminController.updateUser
);
adminRouters.delete(
  "/delete-user/:id",
  adminController.deleteUser
);
export default adminRouters;

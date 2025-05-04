import express from "express";
import { adminController } from "../controllers/index.controller.js";
import { validateCreateUser, validateUpdateUser } from "../middlewares/validateUserFields.middleware.js";
import checkUserAlreadyExists from "../middlewares/checkUserAlreadyExists.middleware.js";
import { validateDoctorInput } from "../middlewares/validateDoctorInput.middleware.js"

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
//doctor manager
adminRouters.get(
  "/get-all-doctors",
  adminController.getAllDoctors
);
adminRouters.post(
  "/save-info-doctor",validateDoctorInput,
  adminController.saveDoctorInfo
);
adminRouters.post(
  "/save-info-doctor",validateDoctorInput,
  adminController.saveDoctorInfo
);
adminRouters.get(
  "/get-doctor-info/:doctorId",
  adminController.getDoctorInfo
);

export default adminRouters;

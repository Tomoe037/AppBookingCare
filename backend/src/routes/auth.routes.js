import express from "express";
import { authController} from "../controllers/index.controller.js";
import validateRegisterInput from "../middlewares/validateRegister.middleware.js";
import checkUserAlreadyExists from "../middlewares/checkUserAlreadyExists.middleware.js";

const authRouters = express.Router();

// Route đăng ký
authRouters.post(
  "/register",
  validateRegisterInput,
  checkUserAlreadyExists,
  authController.register
);
// Route đăng nhập
// router.post("/login", login);

export default authRouters;

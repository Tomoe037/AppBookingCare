import express from "express";
import { userController } from '../controllers/index.controller.js';

const userRouters = express.Router();


userRouters.get(
  "/top-doctor-home", userController.getTopDocTorHome
);


export default userRouters;

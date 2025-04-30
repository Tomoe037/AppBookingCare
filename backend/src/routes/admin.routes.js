import express from "express";
import { adminController } from '../controllers/index.controller.js';

const adminRouters = express.Router();


adminRouters.get(
  "/allcode", adminController.getAllCode
);


export default adminRouters;

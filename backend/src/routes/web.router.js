import express from "express";
import authRouters from "./auth.routes.js";
import userRouters from "./user.routes.js";
let router = express.Router();

let initWebRoutes = (app) => {
 
  app.use("/api/auth", authRouters);

    app.use("/api/user", userRouters);


  return app.use("/", router);
};

export default initWebRoutes;

import express from "express";
import authRouters from "./auth.routes.js";
import adminRouters from "./admin.routes.js";
import userRouters from "./user.routes.js";
let router = express.Router();

let initWebRoutes = (app) => {
  app.use("/api/auth", authRouters);

  app.use("/api/admin", adminRouters);
  app.use("/api/user", userRouters);

  return app.use("/", router);
};

export default initWebRoutes;

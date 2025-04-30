import express from "express";
import authRouters from "./auth.routes.js";
import adminRouters from "./admin.routes.js";
let router = express.Router();

let initWebRoutes = (app) => {
  app.use("/api/auth", authRouters);

  app.use("/api/admin", adminRouters);

  return app.use("/", router);
};

export default initWebRoutes;

import express from "express";
import authRouters from "./auth.routes.js";
// import userRoutes from "./user.routes";
let router = express.Router();

let initWebRoutes = (app) => {
  // Sử dụng route đăng ký và đăng nhập
  app.use("/api/auth", authRouters);
  // Sử dụng route đăng ký và đăng nhập
  //   app.use("/api/user", userRoutes);
  // router.post('/register', register);

  return app.use("/", router);
};

export default initWebRoutes;

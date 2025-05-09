// app.js
import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine.js"
import initWebRoutes from "./routes/web.router.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Cấu hình CORS cho phép frontend truy cập
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);


// Cấu hình body-parser
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb', extended: true }));

// Cấu hình view engine
configViewEngine(app);

// Khai báo route
initWebRoutes(app);

export default app;

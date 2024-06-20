import express from "express";
import { publicRouter } from "../route/public-api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import cors from "cors";
import { supplierRouter } from "../route/supplier.js";

const app = express();
app.use(express.json());
app.set("view engine", "ejs");
// app.set("view engine", "html");
app.set("admin", "../../" + "/admin");
app.use(cors());
app.use(publicRouter);
app.use(supplierRouter);
app.use(errorMiddleware);

export { app };

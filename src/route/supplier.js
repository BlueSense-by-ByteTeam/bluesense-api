import express from "express";
import supplierController from "../controller/supplier-controller.js";

const supplierRouter = new express.Router();

supplierRouter.get("/", (req, res) => {
  res.render('/supplier/auth/')
});

supplierRouter.get("/supplier/dashboard", supplierController.renderDashboard);
supplierRouter.get("/supplier/auth", supplierController.renderAuth);
supplierRouter.get("/supplier/signup", supplierController.renderRegister);


export { supplierRouter };

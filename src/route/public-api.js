import express from "express";
import userController from "../controller/user-controller.js";
import requireAuth from "../middleware/auth-middleware.js";
import adminController from "../controller/admin-controller.js";
import deviceController from "../controller/device-controller.js";

const publicRouter = new express.Router();

publicRouter.get("/", (req, res) => {
  res.status(200).json({
    message: "Konichiwa, Hackfest",
  });
});

publicRouter.post("/api/users/register", requireAuth, userController.register);
publicRouter.get("/api/users", requireAuth, userController.get);

publicRouter.post("/api/admin", adminController.createdDevice);
publicRouter.get("/api/admin/data", adminController.get);

publicRouter.post("/api/devices", requireAuth, deviceController.register);
publicRouter.delete(
  "/api/devices/:id",
  requireAuth,
  deviceController.deleteDeviceById
);
export { publicRouter };

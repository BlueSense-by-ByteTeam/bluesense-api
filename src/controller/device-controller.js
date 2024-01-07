import deviceService from "../service/device-service.js";

const register = async (req, res, next) => {
  try {
    const request = req.body;
    request.email = req.user.email;
    const result = await deviceService.register(request);
    res.status(200).json({ message: "succes" });
  } catch (e) {
    next(e);
  }
};

const deleteDeviceById = async (req, res, next) => {
  try {
    const request = {};
    request.id = req.params.id;
    request.email = req.user.email;
    console.log(request);
    const result = await deviceService.deleteDeviceById(request);
    res.status(200).json({ message: "succes" });
  } catch (e) {
    next(e);
  }
};

export default { register, deleteDeviceById };

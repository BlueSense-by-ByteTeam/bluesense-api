import Joi from "joi";

const registerDevice = Joi.object({
  name: Joi.string().max(100).required(),
  device_id: Joi.string().max(100).required(),
  province: Joi.string().max(100).required(),
  city: Joi.string().max(100).required(),
  district: Joi.string().max(100).required(),
  address: Joi.string().max(100).required(),
  water_source: Joi.string().max(100).required(),
  email: Joi.string().max(100).required(),
});

const deleteDeviceValidation = Joi.object({
  id: Joi.string().max(100).required(),
  email: Joi.string().max(100).required(),
});

const getDeviceValidation = Joi.object({
  uid: Joi.string().max(100).required(),
  email: Joi.string().email().max(100).required(),
});

const createDeviceLogsValidation = Joi.object({
  device_id: Joi.string().max(100).required(),
  ph: Joi.number().required(),
  tds: Joi.number().required(),
});
const getDeviceLogsValidation = Joi.object({
  email: Joi.string().email().max(100).required(),
  device_id: Joi.string().max(100).required(),
});

const getDeviceLogsHistoryValidation = Joi.object({
  email: Joi.string().email().max(100).required(),
  device_id: Joi.string().max(100).required(),
  time: Joi.string(),
});

export {
  registerDevice,
  deleteDeviceValidation,
  getDeviceValidation,
  createDeviceLogsValidation,
  getDeviceLogsValidation,
  getDeviceLogsHistoryValidation,
};

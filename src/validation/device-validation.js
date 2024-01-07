import Joi from "joi";

const registerDevice = Joi.object({
  name: Joi.string().max(100).required(),
  device_id: Joi.string().max(100).required(),
  province: Joi.string().max(100).required(),
  city: Joi.string().max(100).required(),
  address: Joi.string().max(100).required(),
  water_source: Joi.string().max(100).required(),
  email: Joi.string().max(100).required(),
});

export { registerDevice };
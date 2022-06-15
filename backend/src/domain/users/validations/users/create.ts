import { validate, Joi } from "express-validation";

export const create = validate({
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    apartment: Joi.string().required(),    
  }),
});

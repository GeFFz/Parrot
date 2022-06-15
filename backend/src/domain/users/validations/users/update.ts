import { validate, Joi } from "express-validation";

export const update = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string(),
    apartment: Joi.string()
  }),
});

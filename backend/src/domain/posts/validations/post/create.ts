import { validate, Joi } from "express-validation";

export const create = validate({
  body: Joi.object({
    content: Joi.string().required(),
    user_id: Joi.number().required(),   
  }),
});

import { NextFunction, Request, Response} from "express";
import { ValidationError } from "express-validation";
import { Json } from "sequelize/types/utils";
const { UnauthorizedError } = require("express-jwt");

export default function (err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  if (err instanceof UnauthorizedError) {
    console.error(err)
    return res.status(401).json(err);
  }

  return res.status(500).json(err);
};

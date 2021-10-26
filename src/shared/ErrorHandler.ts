import { NextFunction, Request, Response } from "express";
import { ApiError } from "./ApiErrors";

export default function errorHandler(
  e: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  if (e instanceof ApiError) {
    return response.status(e.statusCode).json({
      message: e.message,
    });
  }
  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${e.message}`,
  });
}

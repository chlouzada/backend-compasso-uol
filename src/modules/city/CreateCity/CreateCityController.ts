import { NextFunction, Request, Response } from "express";

import { CreateCityService } from "./CreateCityService";

class CreateCityController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response> {
    const { name, state } = request.body;

    const createCityService = new CreateCityService();

    try {
      const city = await createCityService.execute({
        name,
        state,
      });

      return response.status(201).json(city);
    } catch (err) {
      next(err);
    }
  }
}

export { CreateCityController };

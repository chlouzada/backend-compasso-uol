import { Request, Response } from "express";

import { CreateCityService } from "./CreateCityService";

class CreateCityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, state } = request.body;

    const createCityService = new CreateCityService();

    try {
      const city = await createCityService.execute({
        name,
        state,
      });

      return response.status(201).json(city);
    } catch (err) {
      response.status(err.statusCode).json(err)
    }
  }
}

export { CreateCityController };

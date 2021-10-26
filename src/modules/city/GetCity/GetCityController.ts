import { NextFunction, Request, Response } from "express";
import { GetCityService } from "./GetCityService";

class GetCityController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response> {
    const { name, state } = request.query;

    const getCityService = new GetCityService();

    try {
      const city = await getCityService.execute({
        name: name as string,
        state: state as string,
      });

      return response.json(city);
    } catch (e) {
      next({});
    }
  }
}

export { GetCityController };

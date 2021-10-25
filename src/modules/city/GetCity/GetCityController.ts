import { Request, Response } from "express";
import { GetCityService } from "./GetCityService";

class GetCityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, state } = request.query;

    const getCityService = new GetCityService();

    const city = await getCityService.execute({
      name: name as string,
      state: state as string,
    });

    return response.json(city);
  }
}

export { GetCityController };

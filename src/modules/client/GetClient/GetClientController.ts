import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../../shared/ApiErrors";
import { GetClientService } from "./GetClientService";

class GetClientController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response> {
    const { name } = request.query;
    const { id } = request.params;

    if (isNaN(parseInt(id))) next(ApiError.badRequest("id must be number"));

    const getClientService = new GetClientService();

    try {
      const client = await getClientService.execute({
        id: id as string,
        name: name as string,
      });
      return response.json(client);
    } catch (error) {
      if (error == 404) next(new ApiError("client not found", error));
    }
  }
}

export { GetClientController };

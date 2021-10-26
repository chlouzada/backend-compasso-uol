import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../../shared/ApiErrors";
import { UpdateClientService } from "./UpdateClientService";

class UpdateClientController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;
    
    if (isNaN(parseInt(id)) || !name)
      next(ApiError.badRequest("bad request"));

    const updateClientService = new UpdateClientService();

    try {
      const client = await updateClientService.execute({
        id: id as string,
        name: name as string,
      });
      return response.json(client);
    } catch (error) {
      if (error == 404) next(new ApiError("client not found", error));
      next({});
    }
  }
}

export { UpdateClientController };

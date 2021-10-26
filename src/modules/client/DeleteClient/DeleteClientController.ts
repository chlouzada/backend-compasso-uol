import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../../shared/ApiErrors";
import { DeleteClientService } from "./DeleteClientService";

class DeleteClientController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response> {
    const { id } = request.params;

    if (isNaN(parseInt(id)))
      next(ApiError.badRequest("id must be number"));

    const deleteClientService = new DeleteClientService();

    await deleteClientService.execute({
      id: id as string,
    });

    return response.status(200).json({});
  }
}

export { DeleteClientController };

import { Request, Response } from "express";
import { GetClientService } from "./GetClientService";

class GetClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.query;
    const { id } = request.params;

    const getClientService = new GetClientService();

    try {
      const client = await getClientService.execute({
        id: id as string,
        name: name as string,
      });

      return response.json(client);
    } catch (ex) {
      return response.status(ex.statusCode).json(ex);
    }
  }
}

export { GetClientController };

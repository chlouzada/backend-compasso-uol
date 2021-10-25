import { Request, Response } from "express";

import { CreateClientService } from "./CreateClientService";

class CreateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, sex, age, birthday, city } = request.body;

    const createClientService = new CreateClientService();

    try {
      const client = await createClientService.execute({
        name,
        sex,
        age,
        birthday,
        city,
      });

      return response.status(201).json(client);
    } catch (err) {
      response.status(err.statusCode).json(err);
    }
  }
}

export { CreateClientController };

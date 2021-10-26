import { getRepository, Repository } from "typeorm";
import { Client } from "../../../entity/Client";
import { ApiError } from "../../../shared/ApiErrors";

interface IRequest {
  id: string;
  name: string;
}

class UpdateClientService {
  private clientRepository: Repository<Client>;

  constructor() {
    this.clientRepository = getRepository(Client);
  }

  async execute({ id, name }: IRequest): Promise<Client> {
    const client = await this.clientRepository.findOne({ id: parseInt(id) });

    if (!client) throw 404;

    client.name = name;
    await this.clientRepository.update(id, client);

    return client;
  }
}

export { UpdateClientService };

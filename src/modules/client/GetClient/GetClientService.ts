import { getRepository, Repository } from "typeorm";
import { Client } from "../../../entity/Client";
import { ApiError } from "../../../shared/ApiErrors";

interface IRequest {
  id: string;
  name: string;
}

class GetClientService {
  private clientRepository: Repository<Client>;

  constructor() {
    this.clientRepository = getRepository(Client);
  }

  async execute({ id, name }: IRequest): Promise<Client[] | Client> {
    try {
      let client: Client | Client[];
      if (id) {
        client = await this.clientRepository.findOne({ id: parseInt(id) });
      } else {
        client = await this.clientRepository.find({
          name,
        });
      }
      return client;
    } catch (err) {
      throw new ApiError("bad request", 400);
    }
  }
}

export { GetClientService };

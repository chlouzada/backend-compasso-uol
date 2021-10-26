import { getRepository, Repository } from "typeorm";
import { Client } from "../../../entity/Client";
import { ApiError } from "../../../shared/ApiErrors";

interface IRequest {
  id: string;
}

class DeleteClientService {
  private clientRepository: Repository<Client>;

  constructor() {
    this.clientRepository = getRepository(Client);
  }

  async execute({ id }: IRequest): Promise<void> {
    await this.clientRepository.delete({ id: parseInt(id) });
  }
}

export { DeleteClientService };

import { getRepository, Repository } from "typeorm";
import { Client } from "../../../entity/Client";
import { ApiError } from "../../../shared/ApiErrors";

import * as moment from "moment";
// import {  } from "moment";

interface IRequest {
  name: string;
  sex: string;
  age: number;
  birthday: string;
  city: string;
}

class CreateClientService {
  private clientRepository: Repository<Client>;

  constructor() {
    this.clientRepository = getRepository(Client);
  }

  async execute({
    name,
    sex,
    age,
    birthday,
    city,
  }: IRequest): Promise<Client | undefined> {

    try {
    const momentDate = moment(birthday, "DD-MM-YYYY").format("YYYY-MM-DD");

    const client = this.clientRepository.create({
      name,
      sex,
      age,
      birthday: momentDate,
      city,
    });

    await this.clientRepository.save(client);

    return client;
    } catch (err) {
      throw new ApiError("failed at create", 400);
    }
  }
}

export { CreateClientService };

import { getRepository, Repository } from "typeorm";
import { Client } from "../../../entity/Client";
import { ApiError } from "../../../shared/ApiErrors";

import * as moment from "moment";
// import {  } from "moment";

interface IRequest {
  fullName: string;
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
    fullName,
    sex,
    age,
    birthday,
    city,
  }: IRequest): Promise<Client | undefined> {

    try {
    const momentDate = moment(birthday, "DD-MM-YYYY").format("YYYY-MM-DD");

    const client = this.clientRepository.create({
      fullName,
      sex,
      age,
      birthday: momentDate,
      city,
    });

    await this.clientRepository.save(client);

    return client;
    } catch (err) {
      throw new ApiError("Failed at create", 400);
    }
  }
}

export { CreateClientService };

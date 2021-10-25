import { getRepository, Repository } from "typeorm";
import { City } from "../../../entity/City";
import { ApiError } from "../../../shared/ApiErrors";

interface IRequest {
  name: string;
  state: string;
}

class GetCityService {
  private cityRepository: Repository<City>;

  constructor() {
    this.cityRepository = getRepository(City);
  }

  async execute({ name, state }: IRequest): Promise<City[] | undefined> {
    return await this.cityRepository.find({
      select: ["name", "state"],
      where: [{ name }, { state }],
    });
  }
}

export { GetCityService };

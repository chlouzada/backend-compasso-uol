import { getRepository, Repository } from "typeorm";
import { City } from "../../../entity/City";
import { ApiError } from "../../../shared/ApiErrors";

interface IRequest {
  name: string;
  state: string;
}

class CreateCityService {
  private cityRepository: Repository<City>;

  constructor() {
    this.cityRepository = getRepository(City);
  }

  async execute({ name, state }: IRequest): Promise<City | undefined> {
    if (!name || !state) throw new ApiError("name and state is required", 400);

    const city = this.cityRepository.create({
      name,
      state,
    });

    await this.cityRepository.save(city);

    return city;
  }
}

export { CreateCityService };

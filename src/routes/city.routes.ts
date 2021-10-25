import { Router } from "express";
import { CreateCityController } from "../modules/city/createCity/CreateCityController";
import { GetCityController } from "../modules/city/GetCity/GetCityController";

const cityRouter = Router();

const createCityController = new CreateCityController();
const getCityController = new GetCityController();

cityRouter.post("/", createCityController.handle);
cityRouter.get("/", getCityController.handle);

export default cityRouter;

import { Router } from "express";
import { CreateClientController } from "../modules/client/createClient/CreateClientController";
// import { GetClientController } from "../modules/client/GetClient/GetClientController";

const clientRouter = Router();

const createClientController = new CreateClientController();
// const getClientController = new GetClientController();

clientRouter.post("/", createClientController.handle);
// clientRouter.get("/", getClientController.handle);

export default clientRouter;

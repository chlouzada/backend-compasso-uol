import { Router } from "express";
import { CreateClientController } from "../modules/client/createClient/CreateClientController";
import { GetClientController } from "../modules/client/GetClient/GetClientController";
import { DeleteClientController } from "../modules/client/DeleteClient/DeleteClientController";

const clientRouter = Router();

const createClientController = new CreateClientController();
const getClientController = new GetClientController();
const deleteClientController = new DeleteClientController();

clientRouter.post("/", createClientController.handle);
clientRouter.get("/", getClientController.handle);
clientRouter.get("/:id", getClientController.handle);
clientRouter.delete("/:id", deleteClientController.handle);

export default clientRouter;

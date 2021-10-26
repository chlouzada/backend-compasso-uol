import { Router } from "express";
import { CreateClientController } from "../modules/client/createClient/CreateClientController";
import { GetClientController } from "../modules/client/GetClient/GetClientController";
import { DeleteClientController } from "../modules/client/DeleteClient/DeleteClientController";
import { UpdateClientController } from "../modules/client/UpdateClient/UpdateClientController";

const clientRouter = Router();

const createClientController = new CreateClientController();
const getClientController = new GetClientController();
const deleteClientController = new DeleteClientController();
const updateClientController = new UpdateClientController();

clientRouter.post("/", createClientController.handle);
clientRouter.get("/", getClientController.handle);
clientRouter.get("/:id", getClientController.handle);
clientRouter.delete("/:id", deleteClientController.handle);
clientRouter.put("/:id", updateClientController.handle);

export default clientRouter;

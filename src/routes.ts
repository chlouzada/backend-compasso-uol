import { Router } from "express";
import clientRouter from "./routes/clients";

const routes = Router();

routes.use("/clients", clientRouter);

export default routes;

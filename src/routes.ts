import { Router } from "express";
import cityRouter from "./routes/city.routes";
import clientRouter from "./routes/client.routes";

const routes = Router();

routes.use("/city", cityRouter);
routes.use("/client", clientRouter);

export default routes;

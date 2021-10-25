import { Router } from "express";
import cityRouter from "./routes/city.routes";

const routes = Router();

routes.use("/city", cityRouter);

export default routes;

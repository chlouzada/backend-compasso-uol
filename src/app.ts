import * as express from "express";
import routes from "./routes";
import database from "./config/database";
import errorHandler from "./shared/ErrorHandler";

const app = express();

app.use(express.json({}));

database();

app.use(routes);

app.use(errorHandler);

export default app;

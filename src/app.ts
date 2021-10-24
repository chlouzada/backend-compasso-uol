import * as express from "express";
import routes from "./routes";
import database from "./config/database";

const app = express();

app.use(express.json({}));

app.use(routes);

database();

export default app;
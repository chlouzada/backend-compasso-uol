import { Router } from "express";

const clientRouter = Router();

clientRouter.post("/", async (request, response) => {
  response.status(200).json(true);
});

export default clientRouter;

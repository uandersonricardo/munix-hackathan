import { Router } from "express";

import { discussionsController } from "../controllers";

const discussionsRoutes = Router();

discussionsRoutes.post("/", async (req, res) =>
  discussionsController.create(req, res)
);

export default discussionsRoutes;

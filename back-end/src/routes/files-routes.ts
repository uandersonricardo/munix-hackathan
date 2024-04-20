import { Router } from "express";

import { filesController } from "../controllers";

const filesRoutes = Router();

filesRoutes.get("/", async (req, res) => filesController.index(req, res));
filesRoutes.get("/:id", async (req, res) => filesController.show(req, res));
filesRoutes.put("/:id", async (req, res) => filesController.update(req, res));

export default filesRoutes;

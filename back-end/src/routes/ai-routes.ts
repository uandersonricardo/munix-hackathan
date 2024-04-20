import { Router } from "express";

import { aiController } from "../controllers";

const aiRoutes = Router();

aiRoutes.post("/chat", async (req, res) => aiController.chat(req, res));

export default aiRoutes;

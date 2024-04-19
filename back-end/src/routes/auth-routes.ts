import { Router } from "express";

import { authController } from "../controllers";

const authRoutes = Router();

authRoutes.post("/login", async (req, res) => authController.login(req, res));

export default authRoutes;

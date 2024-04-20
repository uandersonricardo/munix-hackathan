import { Router } from "express";

import { authController } from "../controllers";

const authRoutes = Router();

authRoutes.post("/login", async (req, res) => authController.login(req, res));
authRoutes.get("/me", async (req, res) => authController.me(req, res));

export default authRoutes;

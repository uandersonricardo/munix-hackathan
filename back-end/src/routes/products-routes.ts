import { Router } from "express";

import { productsController } from "../controllers";

const productsRoutes = Router();

productsRoutes.get("/", async (req, res) => productsController.index(req, res));
productsRoutes.get("/:id", async (req, res) =>
  productsController.show(req, res)
);

export default productsRoutes;

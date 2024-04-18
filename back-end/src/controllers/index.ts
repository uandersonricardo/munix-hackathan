import { productsService } from "../services";
import ProductsController from "./products-controller";

export const productsController = new ProductsController(productsService);

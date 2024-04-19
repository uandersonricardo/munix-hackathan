import { productsService, authService } from "../services";
import AuthController from "./auth-controller";
import ProductsController from "./products-controller";

export const authController = new AuthController(authService);
export const productsController = new ProductsController(productsService);

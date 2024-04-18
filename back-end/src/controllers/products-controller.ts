import { Request, Response } from "express";

import ProductsService from "../services/products-service";

class ProductsController {
  private readonly productsService: ProductsService;

  constructor(productsService: ProductsService) {
    this.productsService = productsService;
  }

  public async index(req: Request, res: Response) {
    const result = await this.productsService.index();

    res.status(200).json(result);
  }

  public async show(req: Request, res: Response) {
    const result = await this.productsService.show(parseInt(req.params.id));

    res.status(200).json(result);
  }
}

export default ProductsController;

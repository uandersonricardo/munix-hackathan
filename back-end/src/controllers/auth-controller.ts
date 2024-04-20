import { Request, Response } from "express";

import AuthService from "../services/auth-service";

class AuthController {
  private readonly authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  public async login(req: Request, res: Response) {
    const result = await this.authService.login(req.body.id);

    res.status(200).json(result);
  }

  public async me(req: Request, res: Response) {
    const result = await this.authService.me(
      parseInt(req.query.id?.toString() || "1")
    );

    res.status(200).json(result);
  }
}

export default AuthController;

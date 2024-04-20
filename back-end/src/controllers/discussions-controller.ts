import { Request, Response } from "express";

import DiscussionsService from "../services/discussions-service";

class DiscussionsController {
  private readonly discussionsService: DiscussionsService;

  constructor(discussionsService: DiscussionsService) {
    this.discussionsService = discussionsService;
  }

  public async create(req: Request, res: Response) {
    const result = await this.discussionsService.create(req.body);

    res.status(200).json(result);
  }
}

export default DiscussionsController;

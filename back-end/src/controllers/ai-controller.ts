import { Request, Response } from "express";

import AIService from "../services/ai-service";

class AIController {
  private readonly aiService: AIService;

  constructor(aiService: AIService) {
    this.aiService = aiService;
  }

  public async chat(req: Request, res: Response) {
    const result = await this.aiService.chat(
      parseInt(req.body.id),
      req.body.question
    );

    res.status(200).json(result);
  }
}

export default AIController;

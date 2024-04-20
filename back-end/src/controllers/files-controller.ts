import { Request, Response } from "express";

import FilesService from "../services/files-service";

class FilesController {
  private readonly filesService: FilesService;

  constructor(filesService: FilesService) {
    this.filesService = filesService;
  }

  public async index(req: Request, res: Response) {
    const params = {
      title: req.query.title?.toString(),
      date: req.query.date?.toString(),
      content: req.query.content?.toString(),
      accessPoints: req.query.accessPoints?.toString(),
      type: req.query.type?.toString(),
    };

    const result = await this.filesService.index(params);

    res.status(200).json(result);
  }

  public async show(req: Request, res: Response) {
    const result = await this.filesService.show(parseInt(req.params.id));

    res.status(200).json(result);
  }

  public async update(req: Request, res: Response) {
    const result = await this.filesService.update(req.body);

    res.status(200).json(result);
  }
}

export default FilesController;

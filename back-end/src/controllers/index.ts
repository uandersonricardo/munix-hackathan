import {
  filesService,
  authService,
  discussionsService,
  aiService,
} from "../services";
import AuthController from "./auth-controller";
import FilesController from "./files-controller";
import DiscussionsController from "./discussions-controller";
import AIController from "./ai-controller";

export const authController = new AuthController(authService);
export const filesController = new FilesController(filesService);
export const discussionsController = new DiscussionsController(
  discussionsService
);
export const aiController = new AIController(aiService);

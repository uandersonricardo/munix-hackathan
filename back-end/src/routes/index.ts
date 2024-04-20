import { Router } from "express";

import authRoutes from "./auth-routes";
import filesRoutes from "./files-routes";
import discussionsRoutes from "./discussions-routes";
import aiRoutes from "./ai-routes";

const routes = Router();

routes.use("/auth", authRoutes);
routes.use("/files", filesRoutes);
routes.use("/discussions", discussionsRoutes);
routes.use("/ai", aiRoutes);

export default routes;

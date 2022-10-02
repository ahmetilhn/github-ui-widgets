import express, { Application, Request, Response } from "express";
import routeConstants from "../constants/route.constants";
import CommitRoutes from "./commit.routes";
import ProfileRoutes from "./profile.routes";
import RepositoryRoutes from "./repository.routes";
class Router {
  router: express.IRouter = express.Router({ mergeParams: true });
  init = (app: Application) => {
    app.use(routeConstants.profile.path, ProfileRoutes.router);
    app.use(routeConstants.repositories.path, RepositoryRoutes.router);
    app.use(routeConstants.commits.path, CommitRoutes.router);
    // For all route doc
    app.get("/", (req: Request, res: Response) => {
      res.status(200).json({
        routes: routeConstants,
      });
    });
  };
}

export default new Router();

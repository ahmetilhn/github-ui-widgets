import express, { Application } from "express";
import routeConstants from "../constants/route.constants";
import commitRoutes from "./commit.routes";
import ProfileRoutes from "./profile.routes";
import RepositoryRoutes from "./repository.routes";
class Router {
  router: express.IRouter = express.Router({ mergeParams: true });
  init = (app: Application) => {
    app.use(routeConstants.profile.path, ProfileRoutes.router);
    app.use(routeConstants.repositories.path, RepositoryRoutes.router);
    app.use(routeConstants.commits.path, commitRoutes.router);
  };
}

export default new Router();

import express, { Application } from "express";
import routeConstants from "../constants/route.constants";
import ProfileRouter from "./ProfileRouter";
class Router {
  router: express.IRouter = express.Router({ mergeParams: true });
  init = (app: Application) => {
    app.use(routeConstants.profile.path, ProfileRouter.router);
  };
}

export default new Router();

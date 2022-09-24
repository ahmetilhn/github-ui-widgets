import express, { Application } from "express";
import routeConstants from "../constants/route.constants";
import UserCardRouter from "./UserCardRouter";
class Router {
  router: express.IRouter = express.Router({ mergeParams: true });
  init = (app: Application) => {
    app.use(routeConstants.userCard.path, UserCardRouter.router);
  };
}

export default new Router();

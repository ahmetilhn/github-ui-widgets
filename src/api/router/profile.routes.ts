import { IRouter, Router } from "express";
import UserController from "../controllers/user.controller";

class ProfileRouter {
  public router: IRouter = Router({ mergeParams: true });
  constructor() {
    this.init();
  }
  init = () => {
    this.router.route("/").get(UserController.get);
  };
}

export default new ProfileRouter();

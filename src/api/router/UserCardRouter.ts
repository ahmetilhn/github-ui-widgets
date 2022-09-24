import { IRouter, Router } from "express";
import UserCardController from "../controllers/UserCardController";

class UserCardRouter {
  public router: IRouter = Router({ mergeParams: true });
  constructor() {
    this.init();
  }
  init = () => {
    this.router.route("/").get(UserCardController.get);
  };
}

export default new UserCardRouter();

import { IRouter, Router } from "express";
import UserCardController from "../controllers/UserCardController";

class UserCardRouter {
  public router: IRouter = Router();
  constructor() {
    this.init();
  }
  init = () => {
    this.router.route("/").get(UserCardController.get);
  };
}

export default new UserCardRouter();

import { IRouter, Router } from "express";
import CommitController from "../controllers/commit.controller";

class CommitRouter {
  public router: IRouter = Router({ mergeParams: true });
  constructor() {
    this.init();
  }
  init = () => {
    this.router.route("/").get(CommitController.get);
  };
}

export default new CommitRouter();

import CommitController from "../controllers/commit.controller";
import BaseRouter from "./base.routes";
class CommitRouter extends BaseRouter {
  constructor() {
    super(CommitController);
  }
}

export default new CommitRouter();

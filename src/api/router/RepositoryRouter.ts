import { IRouter, Router } from "express";
import RepositoryController from "../controllers/RepositoryController";

class RepositoryRouter {
  public router: IRouter = Router({ mergeParams: true });
  constructor() {
    this.init();
  }
  init = () => {
    this.router.route("/").get(RepositoryController.get);
  };
}

export default new RepositoryRouter();

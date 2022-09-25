import { IRouter, Router } from "express";
import Repo

class RepositoryRouter {
  public router: IRouter = Router({ mergeParams: true });
  constructor() {
    this.init();
  }
  init = () => {
    this.router.route("/").get(UserController.get);
  };
}

export default new RepositoryRouter();

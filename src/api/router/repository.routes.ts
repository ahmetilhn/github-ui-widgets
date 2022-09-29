import RepositoryController from "../controllers/repository.controller";
import BaseRouter from "./base.routes";

class RepositoryRouter extends BaseRouter {
  constructor() {
    super(RepositoryController);
  }
}

export default new RepositoryRouter();

import BaseRouter from "./base.routes";
import UserController from "../controllers/user.controller";

class ProfileRouter extends BaseRouter {
  constructor() {
    super(UserController);
  }
}

export default new ProfileRouter();

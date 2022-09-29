import { IRouter, Router } from "express";
import IController from "../types/controller.interface";
class BaseRouter {
  private controller: IController;
  public router: IRouter = Router({ mergeParams: true });
  constructor(controller: IController) {
    this.controller = controller;
    this.init();
  }
  public init(): void {
    this.router.route("/").get(this.controller.get);
  }
}

export default BaseRouter;

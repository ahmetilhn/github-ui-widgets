import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../handlers/ErrorHandler";

class UserCardController {
  public get = (req: Request, res: Response, next: NextFunction) => {
    console.log("Came request");
    ErrorHandler.critical("some error");
  };
}
export default new UserCardController();

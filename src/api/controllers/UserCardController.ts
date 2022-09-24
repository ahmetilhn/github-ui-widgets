import { NextFunction, Request, Response } from "express";

class UserCardController {
  public get = (req: Request, res: Response, next: NextFunction) => {
    console.log("Came request");
  };
}
export default new UserCardController();

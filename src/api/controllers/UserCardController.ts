import { NextFunction, Request, Response } from "express";

class UserCardController {
  public get = (req: Request, res: Response, next: NextFunction) => {
    res.render("user-card");
  };
}
export default new UserCardController();

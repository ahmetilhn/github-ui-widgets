import { NextFunction, Request, Response } from "express";
import UserService from "../services/UserService";
class UserCardController {
  public get = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.params);
    await UserService.getUserByUsername(req.params.username);
    res.render("user-card");
  };
}
export default new UserCardController();

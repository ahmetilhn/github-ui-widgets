import { AxiosResponse } from "axios";
import { NextFunction, Request, Response } from "express";
import errorConstants from "../constants/error.constants";
import UserService from "../services/user.service";
import IUser from "../types/user.interface";
class UserController {
  public async get(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<boolean> {
    const response: AxiosResponse<IUser> = await UserService.getUserByUsername(
      req.params.username
    );
    if (!response) {
      res.status(404).json({ msg: errorConstants.NOT_RESULT("User") });
      return;
    }
    res.render("user-card", {
      userData: response.data,
    });
  }
}
export default new UserController();

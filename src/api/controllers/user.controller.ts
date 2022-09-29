import { AxiosResponse } from "axios";
import { NextFunction, Request, Response } from "express";
import errorConstants from "../constants/error.constants";
import UserService from "../services/user.service";
import IUser from "../types/user.interface";
import { usernameValidator } from "../utils/req-validator.util";
class UserController {
  public async get(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    if (!usernameValidator(req)) {
      res.status(400).json({
        msg: errorConstants.BAD_REQUEST + "Username is not defined",
      });
      return next(errorConstants.BAD_REQUEST);
    }
    const response: AxiosResponse<IUser> = await UserService.getUserByUsername(
      req.params.username
    );
    if (!response) {
      res.status(500).json({ msg: errorConstants.SERVER_ERR });
      return;
    }
    res.render("user-card", {
      userData: response.data,
    });
  }
}
export default new UserController();

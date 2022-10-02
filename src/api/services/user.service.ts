import { AxiosResponse } from "axios";
import { NextFunction, Response, Request } from "express";
import baseHTTP from "../plugins/axios.plugin";
import BaseService from "./base.service";

class UserService extends BaseService {
  constructor(req: Request, res: Response, next: NextFunction) {
    super(req, res, next);
  }
  public getUserByUsername = async (): Promise<AxiosResponse> => {
    baseHTTP.defaults.headers["user-agent"] = this.req.headers["user-agent"];
    return baseHTTP.get(`/users/${this.req.params.username}`);
  };
}

export default UserService;

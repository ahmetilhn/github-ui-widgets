import { AxiosResponse } from "axios";
import { NextFunction, Request, Response } from "express";
import baseHTTP from "../plugins/axios.plugin";
import BaseService from "./base.service";

class RepoService extends BaseService {
  constructor(req: Request, res: Response, next: NextFunction) {
    super(req, res, next);
  }
  public getReposByUsername = async (): Promise<AxiosResponse> => {
    return baseHTTP.get(`/users/${this.req.params.username}/repos`);
  };
}
export default RepoService;

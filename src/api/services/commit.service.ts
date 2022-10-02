import { Request, Response, NextFunction } from "express";
import { AxiosResponse } from "axios";
import baseHTTP from "../plugins/axios.plugin";
import BaseService from "./base.service";

class CommitService extends BaseService {
  constructor(req: Request, res: Response, next: NextFunction) {
    super(req, res, next);
  }
  public getCommitsByRepo = async (): Promise<AxiosResponse> => {
    return baseHTTP.get(
      `/repos/${this.req.params.username}/${this.req.params.repo}/commits`
    );
  };
}

export default CommitService;

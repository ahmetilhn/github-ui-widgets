import { AxiosResponse } from "axios";
import { NextFunction, Request, Response } from "express";
import errorConstants from "../constants/error.constants";
import CommitService from "../services/commit.service";
import ICommit from "../types/commit.interface";
import IController from "../types/controller.interface";
import {
  repoNameValidator,
  usernameValidator,
} from "../utils/req-validator.util";
class CommitController implements IController {
  public async get(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    if (!usernameValidator(req) || !repoNameValidator(req)) {
      res.status(400).json({
        msg: errorConstants.BAD_REQUEST,
      });
      return next(errorConstants.BAD_REQUEST);
    }
    const response: AxiosResponse<Array<ICommit>> =
      await CommitService.getCommitsByRepo(
        req.params.username,
        req.params.repo
      );
    if (!response) {
      res.status(500).json({ msg: errorConstants.SERVER_ERR });
      return false;
    }
    const data = response.data.map((item: ICommit) => ({
      commit: item.commit,
      author: item.author,
    }));
    res.render("commits", {
      data: data,
      title: "Commits " + req.params.repo,
    });
  }
}
export default new CommitController();

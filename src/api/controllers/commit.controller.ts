import { AxiosResponse } from "axios";
import { NextFunction, Request, Response } from "express";
import errorConstants from "../constants/error.constants";
import CommitService from "../services/commit.service";
import ICommit from "../types/commit.interface";
class CommitController {
  public get = async (req: Request, res: Response, next: NextFunction) => {
    const response: AxiosResponse<ICommit> =
      await CommitService.getCommitsByRepo(
        req.params.username,
        req.params.repo
      );
    if (!response) {
      res.status(404).json({ msg: errorConstants.NOT_RESULT("Commit") });
      return;
    }
    res.render("commits", {
      commits: response.data,
    });
  };
}
export default new CommitController();

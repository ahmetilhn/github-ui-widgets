import { AxiosResponse } from "axios";
import { NextFunction, Request, Response } from "express";
import errorConstants from "../constants/error.constants";
import CommitService from "../services/commit.service";
import ICommit from "../types/commit.interface";
import IController from "../types/controller.interface";
class CommitController implements IController {
  public async get(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<boolean> {
    const response: AxiosResponse<Array<ICommit>> =
      await CommitService.getCommitsByRepo(
        req.params.username,
        req.params.repo
      );
    if (!response) {
      res.status(404).json({ msg: errorConstants.NOT_RESULT("Commit") });
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

import { AxiosResponse } from "axios";
import { NextFunction, Request, Response } from "express";
import errorConstants from "../constants/error.constants";
import RepositoryService from "../services/repository.service";
import IRepository from "../types/repository.interface";
import { usernameValidator } from "../utils/req-validator.util";
class RepositoryController {
  public async get(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    if (!usernameValidator(req.params)) {
      res.status(400).json({
        msg: errorConstants.BAD_REQUEST + "Username is not defined",
      });
      return next(errorConstants.BAD_REQUEST);
    }
    const service = new RepositoryService(req, res, next);
    const response: AxiosResponse<IRepository> =
      await service.getReposByUsername();
    if (!response) {
      res.status(500).json({ msg: errorConstants.SERVER_ERR });
      return;
    }
    res.render("repository-list", {
      repositories: response.data,
    });
  }
}
export default new RepositoryController();

import { AxiosResponse } from "axios";
import { NextFunction, Request, Response } from "express";
import RepositoryService from "../services/RepositoryService";
import IRepository from "../types/IRepository";
class RepositoryController {
  public get = async (req: Request, res: Response, next: NextFunction) => {
    const response: AxiosResponse<IRepository> = await RepositoryService.getReposByUsername(
      req.params.username
    );
    if (!response) {
      res.status(404).json({ msg: "User not found" });
      return;
    }
    res.render("user-card", {
      userData: response.data,
    });
  };
}
export default new RepositoryController();

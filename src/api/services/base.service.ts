import { NextFunction, Request, Response } from "express";
import baseHTTP from "../plugins/axios.plugin";

class BaseService {
  public req: Request;
  public res: Response;
  public next: NextFunction;
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.config();
  }
  config = () => {
    baseHTTP.defaults.headers["user-agent"] = this.req.headers["user-agent"];
  };
}
export default BaseService;

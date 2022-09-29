import { NextFunction, Request, Response } from "express";

export default interface IController {
  get: (req: Request, res: Response, next: NextFunction) => Promise<boolean>;
}

import { NextFunction, Request, Response } from "express";

export default interface IController {
  get?: (req: Request, res: Response, next: NextFunction) => Promise<unknown>;
  post?: (req: Request, res: Response, next: NextFunction) => Promise<unknown>;
  delete?: (req: Request, res: Response, next: NextFunction) => Promise<unknown>;
  update?: (req: Request, res: Response, next: NextFunction) => Promise<unknown>;
}

import { Request } from "express";

export const usernameValidator = (req: Request): boolean => {
  if (!!req.params?.username) {
    return true;
  }
  return false;
};

export const repoNameValidator = (req: Request): boolean => {
  if (!!req.params?.repo) {
    return true;
  }
  return false;
};

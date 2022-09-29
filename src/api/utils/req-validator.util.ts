import { Request } from "express";

export const usernameValidator = (params: {
  [key: string]: string;
}): boolean => {
  //@ts-ignored
  if (!!params?.username) {
    return true;
  }
  return false;
};

export const repoNameValidator = (params: {
  [key: string]: string;
}): boolean => {
  if (!!params?.repo) {
    return true;
  }
  return false;
};

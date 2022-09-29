import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import axiosConstants from "../constants/axios.constants";
import { statusCodes } from "../constants/http.constants";
import IHttpStatus from "../types/httpStatus.interface";
import ErrorHandler from "../handlers/error.handler";
const LOCAL_MACHINE_USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36";
const baseHTTP: AxiosInstance = axios.create({
  baseURL: "https://api.github.com",
  responseType: "json",
  method: "GET",
  timeout: axiosConstants.TIMEOUT,
  headers: {
    Authorization: `Bearer ${process.env.GIT_TOKEN}`,
    "Content-Type": "application/json",
    "User-Agent": LOCAL_MACHINE_USER_AGENT,
  },
  auth: {
    username: process.env.GIT_USERNAME,
    password: process.env.GIT_PASSWORD,
  },
});

baseHTTP.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (!error.response) {
      if (error.request) {
        console.error(error.request);
        ErrorHandler.critical(error.request);
        return;
      }
      console.error(error.message);
      ErrorHandler.basic(error.request);
      return;
    }
    console.error(error.response.data);
    ErrorHandler.basic(error.response.data);
    const statusCode = statusCodes.find(
      (item: IHttpStatus) => item.status === error.response?.status
    );
    if (statusCode) {
      console.error(statusCode.msg);
    }
  }
);

export default baseHTTP;

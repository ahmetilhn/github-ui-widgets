import axios, { AxiosInstance } from "axios";
import authConstants from "../constants/auth.constants";
import axiosConstants from "../constants/axios.constants";

const baseHTTP: AxiosInstance = axios.create({
  baseURL: "https://api.github.com",
  responseType: "json",
  method: "GET",
  timeout: axiosConstants.TIMEOUT,
  headers: {
    Authorization: `Bearer ${authConstants.TOKEN}`,
    "Content-Type": "application/json",
  },
  auth: {
    username: authConstants.USERNAME,
    password: authConstants.PASSWORD,
  },
});

export default baseHTTP;

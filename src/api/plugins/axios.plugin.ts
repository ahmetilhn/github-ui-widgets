import axios, { AxiosInstance } from "axios";
import axiosConstants from "../constants/axios.constants";

const baseHTTP: AxiosInstance = axios.create({
  baseURL: "https://api.github.com",
  responseType: "json",
  method: "GET",
  timeout: axiosConstants.TIMEOUT,
});

export default baseHTTP;

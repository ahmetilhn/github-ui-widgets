import { AxiosResponse } from "axios";
import baseHTTP from "../plugins/axios.plugin";

class UserService {
  public getUserByUsername = async (username: string): Promise<AxiosResponse> => {
    return baseHTTP.get(`/users/${username}`);
  };
}

export default new UserService();

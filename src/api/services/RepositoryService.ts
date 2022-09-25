import { AxiosResponse } from "axios";
import baseHTTP from "../plugins/axios.plugin";

class RepoService {
  public getReposByUsername = async (
    username: string
  ): Promise<AxiosResponse> => {
    return baseHTTP.get(`/users/${username}/repos`);
  };
}
export default new RepoService();

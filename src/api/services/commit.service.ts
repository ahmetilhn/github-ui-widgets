import { AxiosResponse } from "axios";
import baseHTTP from "../plugins/axios.plugin";

class CommitService {
  public getCommitsByRepo = async (
    username: string,
    repo: string
  ): Promise<AxiosResponse> => {
    return baseHTTP.get(`/repos/${username}/${repo}/commits`);
  };
}

export default new CommitService();

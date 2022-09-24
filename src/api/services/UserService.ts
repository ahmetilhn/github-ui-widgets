import baseHTTP from "../plugins/axios.plugin";
import IUser from "../types/IUser";

class UserService {
  public getUserByUsername = async (username: string): Promise<IUser> => {
    return baseHTTP.get(`/users/${username}`);
  };
}

export default new UserService();

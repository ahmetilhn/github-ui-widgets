import baseHTTP from "../plugins/axios.plugin";
import IUser from "../types/IUser";

export default class UserService {
  constructor(public username: string) {
    this.username = username;
  }
  public getUserByUsername = async (): Promise<IUser> => {
    return baseHTTP.get(`/users/${this.username}`);
  };
}

import config from "./config";
class Server {
  constructor() {
    this.initApp();
  }
  initApp = () => {
    //for env.config bla bla
    config();
  };
}

const server = new Server();

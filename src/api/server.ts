import express from "express";
import config from "./config";
import Router from "./router";
class Server {
  init = () => {
    //for env.config bla bla
    config();
    // create express application
    const app: express.Application = express();
    // init router
    Router.init(app);
    const port: unknown = process.env.API_PORT;
    if (port) {
      app.listen(port, () => {
        console.log(`Port listening at ${port}`);
      });
    }
  };
}

//! start server
const server = new Server();
server.init();

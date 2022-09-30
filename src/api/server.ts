import express, { Application } from "express";
import config from "./config";
import Router from "./router";
class Server {
  public app: Application = express();
  constructor() {
    this.init();
  }
  init = () => {
    config(this.app);
    Router.init(this.app);
    this.app.use(express.json({ limit: "100mb" }));
    this.app.use(
      "/static",
      express.static(
        process.env.NODE_ENV === "production"
          ? process.cwd() + "/dist/public"
          : process.cwd() + "/src/public"
      )
    );
    this.listen();
  };
  listen = (): void => {
    const port = process.env.API_PORT || 5555;
    //!For test development environment
    const isTesting: boolean = process.env.NODE_ENV === "test" || false;
    if (port && !isTesting) {
      this.app.listen(port, () => {
        console.log(`Port listening at ${port}`);
      });
    }
  };
}

export default new Server();

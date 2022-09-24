import { Application } from "express";
import envConfig from "./env.config";
import handlebarsConfig from "./handlebars.config";
export default (app: Application) => {
  envConfig();
  handlebarsConfig(app);
};

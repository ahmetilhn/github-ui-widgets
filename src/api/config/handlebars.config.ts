import { Application } from "express";
import { engine } from "express-handlebars";
export default (app: Application) => {
  app.set("views", process.cwd() + "/src/views/widgets/");
  app.engine(
    "hbs",
    engine({
      extname: ".hbs",
      defaultLayout: "main",
      layoutsDir: process.cwd() + "/src/views/layouts/",
    })
  );
  app.set("view engine", "hbs");
};

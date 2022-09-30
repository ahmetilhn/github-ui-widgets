import { Application } from "express";
import { engine } from "express-handlebars";
export default (app: Application) => {
  app.set("views", process.cwd() + "/src/views/");
  app.engine(
    "hbs",
    engine({
      extname: ".hbs",
      defaultLayout: "main",
      layoutsDir:
        process.env.NODE_ENV === "production"
          ? process.cwd() + "/views/layouts/"
          : process.cwd() + "/src/views/layouts/",
      partialsDir:
        process.env.NODE_ENV === "production"
          ? process.cwd() + "/views/partials/"
          : process.cwd() + "/src/views/partials/",
    })
  );
  app.set("view engine", "hbs");
};

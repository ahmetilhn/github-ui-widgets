import * as dotenv from "dotenv";
dotenv.config();

export default () => {
  return {
    API_PORT: process.env.API_PORT,
    GIT_TOKEN: process.env.GIT_TOKEN,
    GIT_PASSWORD: process.env.GIT_PASSWORD,
    GIT_USERNAME: process.env.GIT_USERNAME,
  };
};

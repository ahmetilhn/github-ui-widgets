import * as dotenv from "dotenv";
dotenv.config();

export default () => {
  return {
    API_PORT: process.env.API_PORT,
  };
};

import fs from "fs";
import logConstants from "../constants/log.constants";
import LogTypes from "../types/LogTypes";
class ErrorHandler {
  private createLog = (type: string, errPayload: string): void => {
    fs.writeFile(
      logConstants[type.toUpperCase()].dir +
        `${type + "_" + new Date().toISOString().slice(0, 10)}.txt`,
      errPayload,
      (err) => {
        if (err) console.log(err);
      }
    );
  };
  public critical = (err: string): void => {
    this.createLog(LogTypes.CRITICAL, err);
  };
  public basic = (err: string): void => {
    this.createLog(LogTypes.BASIC, err);
  };
}

export default new ErrorHandler();

import LogTypes from "../types/LogTypes";
export default {
  CRITICAL: {
    name: LogTypes.CRITICAL,
    dir: process.cwd() + "/src/api/logs/" + LogTypes.CRITICAL + "/",
    level: LogTypes.CRITICAL,
  },
  BASIC: {
    name: LogTypes.BASIC,
    dir: process.cwd() + "/src/api/logs/" + LogTypes.BASIC + "/",
    level: LogTypes.BASIC,
  },
};

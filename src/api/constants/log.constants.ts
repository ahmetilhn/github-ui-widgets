import LogTypes from "../types/log.enum";
export default {
  CRITICAL: {
    name: LogTypes.CRITICAL,
    dir:
      process.env.NODE_ENV === "production"
        ? process.cwd() + "/dist/logs/" + LogTypes.CRITICAL + "/"
        : process.cwd() + "/src/api/logs/" + LogTypes.CRITICAL + "/",
    level: LogTypes.CRITICAL,
  },
  BASIC: {
    name: LogTypes.BASIC,
    dir:
      process.env.NODE_ENV === "production"
        ? process.cwd() + "/dist/logs/" + LogTypes.BASIC + "/"
        : process.cwd() + "/src/api/logs/" + LogTypes.BASIC + "/",
    level: LogTypes.BASIC,
  },
};

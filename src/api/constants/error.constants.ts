export default {
  SERVER_ERR: "There was a problem on the server side",
  GITHUB_SERVER_ERR: "There was a problem on the github server side",
  SYNTAX_ERR: "Syntax error occurred",
  UNKNOWN_ERR: "An unknown error has occurred",
  NOT_RESULT: (relevance: string) => `Not enough ${relevance} found`,
  NOT_FOUND: `Not found`,
};

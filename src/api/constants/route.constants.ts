import apiConstants from "./api.constants";
export default {
  profile: {
    path: "/:username/profile",
    name: "profile",
    description:
      "Allows you to retrieve a user's information such as followers, following, public repositories, gists",
    example: apiConstants.domain + "ahmetilhan24/" + "profile",
  },
  repositories: {
    path: "/:username/repositories",
    name: "repositories",
    description: "Lets you get public repositories",
    example: apiConstants.domain + "ahmetilhan24/" + "repositories",
  },
  commits: {
    path: "/:username/:repo/commits",
    name: "commits",
    description: "Lets you get commits of public repositories",
    example:
      apiConstants.domain + "ahmetilhan24/" + "github-ui-widgets/" + "commits",
  },
};

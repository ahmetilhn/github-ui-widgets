export default {
  profile: {
    path: "/:username/profile",
    name: "profile",
  },
  repositories: {
    path: "/:username/repositories",
    name: "repositories",
  },
  commits: {
    path: "/:username/:repo/commits",
    name: "commits",
  },
};

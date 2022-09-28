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
    path: "/repos/:username/:repo/commits",
    name: "commits",
  },
};

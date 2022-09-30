import {
  repoNameValidator,
  usernameValidator,
} from "../../src/api/utils/req-validator.util";

describe("req-validator-utils works fine", () => {
  it("usernameValidator works fine", () => {
    expect(usernameValidator({ username: "asd" })).toBeTruthy();
  });
  it("repoNameValidator works fine", () => {
    expect(repoNameValidator({ repo: "asd" })).toBeTruthy();
  });
});

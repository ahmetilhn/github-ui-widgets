import request from "supertest";
import { app } from "../test-util";
describe("Commits api works fine", () => {
  it("get endpoint working", async () => {
    const res = await request(app).get(
      "/ahmetilhan24/github-ui-widgets/commits"
    );
    expect(res.statusCode).toEqual(200);
  });
});

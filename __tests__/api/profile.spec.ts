import request from "supertest";
import { app } from "../test-util";
describe("profile(user-profile) api works fine", () => {
  it("get endpoint working", async () => {
    const res = await request(app).get("/ahmetilhan24/profile");
    expect(res.statusCode).toEqual(200);
  });
});

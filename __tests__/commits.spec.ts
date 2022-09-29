import request from "supertest";
import { app } from "./test-util";
describe("Commits api works fine", () => {
  it("explodes without username", async () => {
    const res = await request(app).get("/ahmetilhan24/profile");
    expect(res.statusCode).toEqual(200);
  });
  it("explodes without username", async () => {
    const res = await request(app).get("/ahmetilhan24/repositories");
    expect(res.statusCode).toEqual(200);
  });
});

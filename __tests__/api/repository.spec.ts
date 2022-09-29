import request from "supertest";
import { app } from "../test-util";
describe("Repositories api works fine", () => {
  it("get endpoint working", async () => {
    const res = await request(app).get("/ahmetilhan24/repositories");
    expect(res.statusCode).toEqual(200);
  });
});

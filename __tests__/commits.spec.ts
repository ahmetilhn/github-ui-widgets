import request from "supertest";
import server from "../src/api/server";
describe("Comms api works fine", () => {
  it("explodes without username", async () => {
    const res = await request(server);
  });
});

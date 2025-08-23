const request = require("supertest");
const app = require("../app"); // assuming your Express app is exported from app.js

describe("API Test", () => {
  it("should return Hello World", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Hello World");
  });
});

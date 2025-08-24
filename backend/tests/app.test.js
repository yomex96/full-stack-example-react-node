const request = require("supertest");
const app = require("../app");

describe("API Test", () => {
  it("should return a quote with text and author", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);

    const body = JSON.parse(res.text);
    expect(body).toHaveProperty("text");
    expect(body).toHaveProperty("author");
  });

  it("should return a quote each request", async () => {
    const quotes = [];
    for (let i = 0; i < 3; i++) {
      const res = await request(app).get("/");
      const body = JSON.parse(res.text);
      quotes.push(body.text);
      expect(body).toHaveProperty("text");
      expect(body).toHaveProperty("author");
    }

    // Optional: log quotes to see variety (for debugging)
    console.log("Quotes fetched:", quotes);
  });
});

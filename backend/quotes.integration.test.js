const request = require("supertest");
const app = require("../app"); // make sure your app is exported

describe("Integration Test: Quotes API", () => {
  it("should return different quotes on multiple requests", async () => {
    const quotes = [];

    for (let i = 0; i < 5; i++) {
      const res = await request(app).get("/");
      expect(res.statusCode).toBe(200);

      const body = JSON.parse(res.text);
      expect(body).toHaveProperty("text");
      expect(body).toHaveProperty("author");

      quotes.push(body.text);
    }

    // Check that we got more than one unique quote
    const uniqueQuotes = [...new Set(quotes)];
    expect(uniqueQuotes.length).toBeGreaterThan(1);
  });
});

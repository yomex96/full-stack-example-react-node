describe("Fetch Quote Button", () => {
  it("should display a new quote when the button is clicked", () => {
    cy.visit("http://localhost:5000"); // React dev server

    cy.get("#fetch-quote-btn").click();

    cy.get(".quote-text").should("not.be.empty");
    cy.get(".quote-author").should("not.be.empty");
  });
});

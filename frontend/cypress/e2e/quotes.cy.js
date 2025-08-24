describe("Quotes App E2E Test", () => {
  it("should fetch and display a quote when button is clicked", () => {
    cy.visit("http://localhost:3000"); // make sure React app is running

    cy.contains("Generate Quote").click();

    cy.get("[data-testid=quote-text]").should("not.be.empty");
    cy.get("[data-testid=quote-author]").should("not.be.empty");
  });
});

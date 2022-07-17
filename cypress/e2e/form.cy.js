describe("Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should have log in button", () => {
    cy.get("button").contains("Log in");
  });

  it("Should have empty text inputs on load", () => {
    cy.get("div .input-boxes").should("be.empty");
  });

  it("Should have 5 buttons on the page", () => {
    cy.get("button").should("have.length", 5);
  });

  it("Should be able to select the username input and fill it with a value", () => {
    cy.get("input[name=username]")
      .type("lourdes")
      .should("have.value", "lourdes");
  });

  it("Should be able to select the password input and fill it with a value", () => {
    cy.get("input[name=password]")
      .type("jordan")
      .should("have.value", "jordan");
  });
});

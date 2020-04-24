describe("Pizza Order Form", () => {
    ///navigate to the project form
  it("navigates to the localhost", () => {
    cy.visit("");
    cy.url().should("include", "localhost");
  });

  ///// input a valid name
  it("input a name", () => {
    cy.get('input[name="name"]').type("Nick").should("have.value", "Nick");
  });

/// check the terms checkbox

  it("check the olives", () => {
    cy.get('input[name="olives"]').check().should("checked");
  });
  it("check the pepperoni", () => {
    cy.get('input[name="pepperoni"]').check().should("checked");
  });
  it("check the greenbell peppers", () => {
    cy.get('input[name="greenbell"]').check().should("checked");
  });
  it("check the onions", () => {
    cy.get('input[name="onions"]').check().should("checked");
  });
  it("input special instructions", () => {
    cy.get('input[name="special"]').type("get me some bacon bits on there").should("have.value", "get me some bacon bits on there");
  });
  ///submit the user
  it("submit the user", () => {
    cy.get("form button").click();
  });

  /// uncheck terms to finish clearing the form
  it("uncheck the olives", () => {
    cy.get('input[name="olives"]').uncheck();
  });


}); //close everything
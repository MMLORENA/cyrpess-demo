describe("Given Dogs List page", () => {
  describe("When the user clicks on 'New Dog' link", () => {
    it("Then it should be redirected to '/create'", () => {
      cy.visit("/dogs");
      cy.findByRole("link", { name: "New Dog" }).click();

      cy.findByRole("heading", { name: "Create New Dog" }).should("exist");
      cy.url().should("include", "/create");
    });
  });
});

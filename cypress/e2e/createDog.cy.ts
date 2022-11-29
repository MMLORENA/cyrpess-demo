const newDog = {
  name: "Lora",
  chip: "12345",
  picture: "Lora.jpg",
};

afterEach(() => {
  cy.request("DELETE", `${Cypress.env("apiUrl")}dogs/delete`, {
    chip: `${newDog.chip}`,
  });
});

describe("Given New Dogs page", () => {
  describe("When the user types 'Lora' as name, '6' as chip and 'lolo.jpg' as picture", () => {
    it("Then it should be redirect to '/dogs' page and show 'Lolita' dog", () => {
      cy.visit("/create");
      cy.findByLabelText("Name").type("Lora");
      cy.findByLabelText("Chip").type("hrfdgdfgdggdh");
      cy.findByRole("button", { name: "Create Dog" }).should("be.disabled");
      cy.findByLabelText("Picture").type("Lolita.jpg{enter}");

      cy.findByRole("heading", { name: "Dogs List" }).should("exist");
      cy.findByRole("heading", { name: "Lora" }).should("exist");
      cy.findByAltText("Lora").should("exist");
    });
  });
});

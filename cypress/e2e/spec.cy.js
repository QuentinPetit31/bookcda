describe("Création d'une catégorie", () => {
  it("devrait créer une catégorie et la retrouver dans la liste", () => {
    // Arrange
    cy.visit("http://127.0.0.1:8000/category/new");

    // Act
    const label = "Test Cypress ajouter une Catégorie " + Date.now();
    cy.get('input[name="category[label]"]').type(label);
    cy.get("form").submit();

    // Assert
    cy.url().should("include", "/category");
    cy.contains("td", label).should("exist");
  });
});

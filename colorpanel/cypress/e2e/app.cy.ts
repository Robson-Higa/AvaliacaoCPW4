describe("e2e tests", () => {
  beforeEach(() => {
    cy.visit("");
    cy.fixture("values.json").as("values");
  });

  

  it("should decrement counter correctly", function () {
    const sentence = this.values.sentence;
    cy.get('[data-cy="sentence-input"]').type(sentence);

    for (let i = 0; i < sentence.length; i++) {
      cy.get('[data-cy="sentence-input"]').type("{backspace}");
    }

    const result = `A frase contém 0 caracteres.`;
    cy.get('[data-cy="counter-result"]').should("have.text", result);
  });
});
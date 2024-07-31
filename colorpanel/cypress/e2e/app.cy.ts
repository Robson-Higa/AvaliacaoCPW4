describe("e2e tests", () => {
  beforeEach(() => {
    cy.visit("");
    //cy.fixture("values.json").as("values");
  });
   it('should show a color correctly', function () {
    const red: number = 255;
    const green: number = 0;
    const blue: number = 0;
    const alpha: number = 0.5;
    cy.get(':nth-child(1) > input').invoke('val', red).trigger('change');
    cy.get(':nth-child(2) > input').invoke('val', green).trigger('change');
    cy.get(':nth-child(3) > input').invoke('val', blue).trigger('change');
    cy.get(':nth-child(4) > input').invoke('val', alpha).trigger('change');
    cy.wait(1000); 
    cy.get('.styles_panel__JmTVJ').should('have.css', 'background-color', `rgba(${red}, ${green}, ${blue}, ${alpha})`);

  })
});
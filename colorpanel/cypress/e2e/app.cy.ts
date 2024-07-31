describe("e2e tests", () => {
  beforeEach(() => {
    cy.visit("");
    //cy.fixture("values.json").as("values");
  });
   it('deve ajustar a cor exibida quando os inputs de cor são modificados', function () {
    cy.get(':nth-child(1) > input').invoke('val', '100').trigger('change');
    cy.get(':nth-child(2) > input').invoke('val', '15').trigger('change');
    cy.get(':nth-child(3) > input').invoke('val', '20').trigger('change');
    cy.get(':nth-child(4) > input').invoke('val', '0.8').trigger('input');
    cy.wait(1000); 
    cy.get('.styles_panel__Dze9I').should('have.css', 'background-color', `rgba(100, 15, 20, 0.8)`);

  })
});
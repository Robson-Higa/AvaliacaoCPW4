import ColorPanel from "./index";

describe("<ColorPanel />", () => {
  it("should correctly color", () => {
    cy.mount(<ColorPanel red={25} green={45} blue={50} alpha={0} />);
    //const alpha = 144 / 255;
    const result = `rgba(25, 45, 50, 0)`;
    cy.get('[data-cy-root=""] > div').should('have.css', "background-color", result);
  });
});
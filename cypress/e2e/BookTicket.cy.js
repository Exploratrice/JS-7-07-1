import "@4tw/cypress-drag-drop";
//бронирование фильма в доступный зал, название которого вы получаете из админки
describe("BookTicket", () => {
  it("Should add room", () => {
    cy.visit("http://qamid.tmweb.ru/admin/");
    cy.fixture("selector.json").then((selector) => {
      cy.fixture("login.json").then((loginAdm) => {
        cy.get(selector[1].login).type(loginAdm[0].login);
        cy.get(selector[2].pass).type(loginAdm[0].pass);
      });
      cy.get(selector[0].loginButton).click();
    });

    const dataTransfer = new DataTransfer();
    
    cy.get("[draggable='true'][data-film-id='118']").trigger("dragstart", {dataTransfer});
    cy.get("div [data-hall-id='1920'] > div").trigger("drop", { dataTransfer });
    cy.get("[draggable='true'][data-film-id='118']").trigger("dragend");

    cy.get("#start-sales > .text-center > .conf-step__button").click();

    cy.visit("http://qamid.tmweb.ru");
    cy.contains("Зал 1").should("be.visible");
  });
});
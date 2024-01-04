describe("LoginAsAdmin", () => {
    beforeEach(() => {
      cy.visit("http://qamid.tmweb.ru/admin/");
    });

    it("Should be login as Admin", () => {

      cy.fixture("selector.json").then((selector) => {
        cy.fixture("login.json").then((loginAdm) => {
          cy.get(selector[1].login).type(loginAdm[0].login);
          cy.get(selector[2].pass).type(loginAdm[0].pass);
        });
        cy.get(selector[0].loginButton).click();
      });
  
      cy.contains("Администраторррская").should("be.visible");
    });
  
    it("Auth Error", () => {
  
      cy.fixture("selector.json").then((selector) => {
        cy.fixture("login.json").then((loginAdm) => {
          cy.get(selector[1].login).type(loginAdm[1].login);
          cy.get(selector[2].pass).type(loginAdm[1].pass);
        });
  
        cy.get(selector[0].loginButton).click();
      });
  
      cy.contains("Ошибка авторизации!").should("be.visible");
    });
  
    it("Shouldn't Auth with empty pass", () => {
      cy.fixture("selector.json").then((selector) => {
        cy.fixture("login.json").then((loginAdm) => {
          cy.get(selector[1].login).type(loginAdm[2].login);
          cy.get(selector[2].pass).type(loginAdm[2].pass);
        });
  
        cy.get(selector[0].loginButton).click();
      }).then(($el) => {
        return $el[0].checkValidity();
      }).should("be.true");
    });
      //cy.contains("Заполните это поле.").should("be.visible");
      //cy.get(".validationMessage").should("have.text", "Заполните это поле.");
  });
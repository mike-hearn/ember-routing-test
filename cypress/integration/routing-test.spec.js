/// <reference types="cypress" />

describe("Implicit Assertions", () => {
  beforeEach(() => {
    cy.server();
    cy.route(/article/, {
      data: {
        type: "page",
        id: "1",
        attributes: {
          "page-type": "informationpage"
        }
      }
    });
    cy.route(/information/, {
      data: {
        type: "page",
        id: "1",
        attributes: {
          "page-type": "articlepage"
        }
      }
    });
  });
  it("Verify template is rendered based on API payload", () => {
    cy.visit("http://localhost:4200/fake/url");
  });
});

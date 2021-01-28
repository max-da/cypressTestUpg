describe("Presentation page", () => {

    it("Open page", () =>{
        cy.visit("/presentation");
        cy.url().should('include', '/presentation').end();
    });

    it("Go back", () =>{
        cy.visit("/presentation");
        cy.get("a").click();
        cy.contains("Välkommen CoolUser").end();
    }); 
})
describe('headingTest', ()=>{
    it('contains the correct title', ()=>{
        cy.visit("http://localhost:5000/guestbook");
        cy.get("textarea")
        .invoke('text')
        .should('equal', 'Skriv ett inlägg...');
    });
});
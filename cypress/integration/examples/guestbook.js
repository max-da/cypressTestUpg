describe('headingTest', ()=>{
    it('contains the correct title', ()=>{
        cy.visit("http://localhost:5000/guestbook");
        
        cy.get("h1")
        .invoke('text')
        .should('equal', 'Gästbok!');
    });
});
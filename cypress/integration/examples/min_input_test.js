describe('Text box with min characters', ()=>{
    it('displays error message if # of chars are smaller than 3', ()=>{
        cy.visit("http://localhost:5000/guestbook");
        cy.get('textarea').type('1')
        cy.contains('Posta').click()
        cy.get('#errorMessage')
        .invoke('text')
        .should('equal','För kort meddelande!')
        cy.visit("http://localhost:5000/guestbook");
        cy.get('textarea').type('11')
        cy.contains('Posta').click()
        cy.get('#errorMessage')
        .invoke('text')
        .should('equal','För kort meddelande!')
        


        

    });
});
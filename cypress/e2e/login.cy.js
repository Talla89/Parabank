describe('login', () => {
    it.only('Se connecter avec un identifiant correct', () => { 
       cy.visit('https://parabank.parasoft.com/parabank/index.htm')
       cy.get('form > :nth-child(2) > .input').type("Talco")
       cy.get(':nth-child(4) > .input').type("Mba2021")
       cy.get(':nth-child(5) > .button').click()
      //  cy.get('#showOverview > .title').should('contain', 'Accounts Overview')
      // Se déconnecter
      // cy.get('#leftPanel > ul > :nth-child(8) > a').click()
    it('Se connecter avec un identifiant incorrect', () => { 
         cy.visit('https://parabank.parasoft.com/parabank/index.htm')
         cy.get('form > :nth-child(2) > .input').type("Tapha")
         cy.get(':nth-child(4) > .input').type("Mba2021")
         cy.get(':nth-child(5) > .button').click()
         cy.get('.error').should('contain', 'The username and password could not be verified.')
       })  
   

    })})
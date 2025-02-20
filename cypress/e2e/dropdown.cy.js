describe('login', () => {
    it.only('Se connecter', () => { 
       cy.visit('https://parabank.parasoft.com/parabank/index.htm')
       cy.get('#loginPanel > form > div:nth-child(2) > input').type("Toma")
       cy.get('#loginPanel > form > div:nth-child(4) > input').type("Mba2022")
       cy.get('#loginPanel > form > div:nth-child(5) > input').click()
      //  cy.get("div[id='showOverview'] h1[class='title']").should('contain', 'Accounts Overview')
       cy.get("a[href='activity.htm?id=14454']").click()
       cy.get('#month').select(11)
       cy.get('#month').select('mars')
       cy.get('#month').select('mai')
       
      
   

    })})
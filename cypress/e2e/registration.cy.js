describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('#loginPanel > :nth-child(3) > a').click()
    cy.get("input[id='customer.firstName']").type('Talla')
    cy.get("input[id='customer.lastName']").type('MBA')
    cy.get("input[id='customer.address.street']").type('2 place du marché')
    cy.get("input[id='customer.address.city']").type("Cergy")
    cy.get("input[id='customer.address.state']").type("France")
    cy.get("input[id='customer.address.zipCode']").type("95280")
    cy.get("input[id='customer.phoneNumber']").type("0789784534")
    cy.get("input[id='customer.ssn']").type("0000")
    cy.get("input[id='customer.username']").type("Toma")
    cy.get("input[id='customer.password']").type("Mba2022")
    cy.get("input[id='repeatedPassword']").type("Mba2022")
    cy.get("input[value='Register']").click()
    // cy.get('.title').should('contain', 'Welcome Toma')
    


    
  })
})
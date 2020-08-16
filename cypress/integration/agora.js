
context('SearchAndParsingArticleElement', () => {
	beforeEach(() => {
	})




it("posting on agora",() =>
		{
            cy.visit("https://alm-test.pontoonx.io")
            cy.get('input[id="inputEmail"]')
              .type("campari")

            cy.contains('Next', { force: true })
            .click()

            cy.get('input[id="inputPassword"]')
              .type("pontoonx")

              cy.contains('Sign in', { force: true })
              .click()

            cy.log("Sign in sucessfull...")

            cy.get('[to="/supplier/ambassador"] > .md-list-item-router > .md-list-item-content > .md-list-item-text').click()
            
            cy.contains("Jenner",{ force: true }).click()


        

              
             
        })


})
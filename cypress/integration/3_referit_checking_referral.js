import './referit_loginToSite'





context('CheckingOpportunityFunction', () =>
{   
    beforeEach(() => {
    
        })

        it('View Referral', () =>
        {
            cy.get('.list-header > .v-list-item__content > .v-list-item__title')
              .click()
            //View details of referral
            cy.get('[href="/referral/view/8076"] > .v-btn__content')
              .click()
            cy.wait(500)
            cy.scrollTo('bottom',{delay:100})
            cy.get('.list-header > .v-list-item__content > .v-list-item__title')
              .click()
            //view and edit new activity
            /*cy.get('[href="/referral/activities/8076"] > .v-btn__content')
              .click()
            cy.get('button.button-action > .v-btn__content')
              .click()
            cy.get('.v-overlay__scrim').click(80, 70)*/
            cy.get('[href="/referral/edit/8076"] > .v-btn__content')
              .click() //edit activity
            cy.get('#input-314')
              .type('This opportunity is edited by automated test')
            cy.get('.col > button.v-btn > .v-btn__content')
              .click()
            
        }

    

)

})
import './referit_loginToSite'
//var button
const opportunities = '[href="/opportunities/list"] > .v-list-item__content > .v-list-item__title'
const addButton = ":nth-child(2) > .button-action > .v-btn__content"
const editButton = ':nth-child(1) > .v-card__actions > .v-btn--router > .v-btn__content'
const deleteButton = "cy.get(':nth-child(1) > .v-card__actions > button.button-action > .v-btn__content')"
//var text contents
const name = "This Opportunity is created by automated test"
const details = "This details is created by automated test"
const note = "This reminder note is created by automated test"
context('CheckingOpportunityFunction', () =>
{   
    beforeEach(() => {
    
        })

    it('EnterOpportunities', () =>
        {
        //add opportunities
        cy.get(opportunities)
          .click()
        cy.get(addButton)
          .click()
        cy.wait(500)
        cy.get('input[placeholder="Opportunity Name"')
          .type(name)
          cy.get('#input-104')
          .type(details)
        cy.get('input[placeholder="Reminder Note"')
          .type(note)
          cy.get('input[placeholder="Reminder"')
          .click()
          cy.get(':nth-child(5) > :nth-child(6) > .v-btn')
          .click()
          cy.contains("Save",{force:true}).click()


        //edit opportunities
        cy.get(':nth-child(1) > .rounded-xl > :nth-child(1) > .mb-n6 > .v-card__text > :nth-child(3) > .v-btn__content > .v-icon')
          .click()
          cy.get('input[placeholder="Opportunity Name"')
          .type(name + "Edited")                           
        /*cy.get(':nth-child(4) > :nth-child(3) > .v-btn > .v-btn__content')//calendar
          .click()*/
          cy.contains("Save",{force:true}).click()
        }
    )
})

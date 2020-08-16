import './referit_loginToSite'
//var textField = ['input[placeholder="Activity Name"]','input[placeholder="Detail"]','input[placeholder="Status"]','input[placeholder="Location"]']
var textField = [':nth-child(1) > .v-input__control > .v-input__slot > .v-text-field__slot', '#input-202', '#input-215']
let textContent = ['Name','Details','Location']
var fillActivity  = (function () {
    var executed = false;
    return function () {
        if (!executed) {
            context('Filling activity', () => {
                beforeEach(() => {
                })
            
                it('loginToSite', () => {
                    cy.get('.list-header > .v-list-item__content > .v-list-item__title')
                        .click()
                    cy.get('[href="/referral/activities/8076"] > .v-btn__content')
                        .click()
                    cy.get('.search > .v-btn > .v-btn__content',{force:true}).click()
                        for (let i = 0; i < textField.length; i++) {
                            
                            cy.get(textField[i])
                              .type('this is a text')
                        }
                    cy.get('#input-206',{force:true}).click()
                    cy.get(':nth-child(5) > :nth-child(5) > .v-btn').click()
                    cy.get(':nth-child(5) > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon').click()
                    cy.get('#list-item-574-1 > .v-list-item__content > .v-list-item__title').click()
                    cy.get(':nth-child(7) > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon').click()
                    cy.get('#list-item-574-1 > .v-list-item__content > .v-list-item__title').click()
                    cy.contains("Save",{force:true}).click()
                })
            })
        
            executed = true;
        }
    };
})();
 


fillActivity(); // "login" happens only once
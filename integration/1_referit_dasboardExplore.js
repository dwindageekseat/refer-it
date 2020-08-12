import './referit_loginToSite'

context('Quick Test', () => {
    beforeEach(() => {
    
    }
    
)

    it('checking dashboard',() =>
    {
      cy.get('.v-list-item--active > .v-list-item__content > .v-list-item__title')
        .click()
    })


    it('Checking opportunities',() =>
    {
      cy.get('[href="/opportunities/list"] > .v-list-item__content > .v-list-item__title')
        .click()
        
    })

    it('Checklng referral', () =>
    {
      cy.get('.list-header > .v-list-item__content > .v-list-item__title')
        .click()
    })

    it('Checking reminder', () =>
    {
      cy.get('[href="/reminders/list"] > .v-list-item__content > .v-list-item__title')
        .click()
    })
    
    it('Checking billing', () =>
    {
      //clicking billing
      cy.get('.v-list-group__header > .v-list-item__content > .v-list-item__title')
        .click()
      //billing group
      cy.get('.v-list-group__header__append-icon > .v-icon')
        .click()
      cy.get('.v-list-group__header__append-icon > .v-icon').click()//billing account
      cy.get('[href="/billingHistory"] > .v-list-item__content > .v-list-item__title').click()//billing history
      
    })
    
    it('Checking subscriptiom',() =>
    {
      cy.get('[href="/subscription"] > .v-list-item__content > .v-list-item__title')
        .click()
    })

    it('checking setting and logout', () =>
    {
      cy.get('[href="/settings"] > .v-list-item__content > .v-list-item__title')
        .click()
      cy.get('[href="/logout"] > .v-list-item__content > .v-list-item__title')
        .click()
      cy.get('.red--text > .v-btn__content')
        .click()
    })

})

//test
//test
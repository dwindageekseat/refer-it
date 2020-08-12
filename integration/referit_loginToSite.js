var doLogin = (function () {
  var executed = false;
  return function () {
      if (!executed) {
          context('Login', () => {
              beforeEach(() => {
              })
          
              it('loginToSite', () => {
                  cy.visit("https://test.refer-it.co/login", {
                      onBeforeLoad(win) {
                          Object.defineProperty(win.navigator, 'language', {
                              value: 'en'
                          })
                      }
                  })



                  cy.log("inputting credential please wait . .")
                  cy.get('input[type="text"]')
                    .type('mike@geekseat.com.au',{delay:100})
                    cy.get('input[type="Password"]')
                    .type('123',{delay:100})
                  cy.get(':nth-child(2) > .v-input__control > .v-input__slot > .v-input__append-inner > .v-input__icon > .v-icon')
                    .click()
                  cy.get('.v-btn__content', {force:true})
                    .click()
              })
          })

          executed = true;
      }
  };
})();    
doLogin()
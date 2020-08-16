var doLogin = (function () {
    var executed = false;
    return function () {
        if (!executed) {
            context('Login', () => {
                beforeEach(() => {
                })
            
                it('loginToSite', () => {
                    cy.visit("https://www.instagram.com/", {
                        onBeforeLoad(win) {
                            Object.defineProperty(win.navigator, 'language', {
                                value: 'en'
                            })
                        }
                    })
                    cy.get('input[name="username"]')
                        .type('USERNAME', { delay: 100 })
                    cy.get('input[name="password"]')
                        .type('PASSWORD', { delay: 100 })
                    cy.get('#react-root').click(90, 50)
                    cy.contains('Log In', { force: true })
                        .click()
                    cy.get('#react-root')
                        .click()
                })
            })
 
            executed = true;
        }
    };
})();
 


doLogin(); // "login" happens only once
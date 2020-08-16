import './instagramLogin'

var htmlArticle
var scrollTimes = 6
let listUsername = ["blackpinkofficial", "twicetagram", "redvelvet.smtown"]
var popUp = true

context('SearchAndParsingArticleElement', () => {
	beforeEach(() => {
	})

	for (const username of listUsername) {
		it('Process Username ' + username, function (done) {
			// If error then return false
			cy.on('uncaught:exception', (err, runnable) => {
				expect(err.message).to.include('is not defined')
				cy.log(`${username} is not processed, retry manually later!`)
				done()
				return true
			})

			// Handle 2 Pop-up
			if (popUp) {
				cy.contains('Save Your Login Info?').then(() => {
					cy.contains('Not Now', { force: true }).first().click({ multiple: true, force: true }).then(() => {
						cy.wait(3000)
					})
				})
				cy.contains('Turn on Notifications').then(() => {
					cy.contains('Not Now', { force: true }).first().click({ multiple: true, force: true }).then(() => {
						cy.wait(3000)
					})
				})
				popUp = false
			}
			
			// Search username
			cy.contains('Search', {force: true}).first().click({ multiple: true, force: true })
			cy.wait(2000)
			cy.get('input[placeholder="Search"]').type(username, { delay: 150 })
			cy.wait(2000)
			cy.contains(username, {force: true}).then(() => {
				cy.contains(username, {force: true}).click({ multiple: true, force: true }).then(() => {
					cy.location('pathname', { timeout: 20000 }).should('include', "/" + username + "/")
				})
			})
			cy.wait(3000)

			// Scroll
			for (var i = 0; i < scrollTimes; i++) {
				cy.scrollTo('bottom')
				cy.wait(2000)
			}

			// Parsing
			cy.document().then((doc) => {
				var articleDoc = doc.getElementsByTagName( 'article' )
				htmlArticle = articleDoc
				cy.log(username + " Html Article: \n" + htmlArticle + "\n")
				//cy.task('logArticle', username + " Html Article: \n" + htmlArticle + "\n")
			})

			// done
			cy.get('svg[aria-label="Home"]').click()
			cy.wait(2000)

			cy.wait(3000).then(() => {
				//cy.get('img[alt="Instagram"]').click()
				done()
				return false
			})

		})
		
	}


})
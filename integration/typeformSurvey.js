var scrollTimes = 6 // berapa kali nge scroll kebawah
let listUsername = ["blackpinkofficial", "twicetagram", "redvelvet.smtown"]  // username yg mau di kepo
var popUpTurnOnNotificaton = false // pasang true kalo bakal ada pop up:  1. Turn on notificaton
var popUpSaveInfo = true // pasang true kalo bakal ada pop up: 2. Save info
var Post_automatically= false //nek meh pake auto post di true
var Ambassador = "Jenner" // nama ambassador

var dir = './cypress/integration/article-instagram'; // Nanti Folder 'article' sbg penampung txt nya

var userLogin = "thestory_ended" // user insta mu
var userPassword = "ThisFeelingVP73!" // password insta mu

ss
context('SearchAndParsingArticleElement', () => {
	beforeEach(() => {
	})

	it('Process ' + listUsername.length + ' Username ', () => {
		// Create New Folder
		cy.log("Creating folder on " + dir)
		cy.task('createNewFolder', dir)

		// Login
		cy.visit("https://www.instagram.com/", {
			onBeforeLoad(win) {
				Object.defineProperty(win.navigator, 'language', {
					value: 'en'
				})
			}
		})
		cy.get('input[name="username"]')
			.type(userLogin, { delay: 100 })
		cy.get('input[name="password"]')
			.type(userPassword, { delay: 100 })
		cy.get('#react-root').click(90, 50)
		cy.contains('Log In', { force: true })
			.click()
		cy.get('#react-root')
			.click()

		// Handle 2 Pop-up
		if (popUpSaveInfo) {
			cy.contains('Save Your Login Info?').then(() => {
				cy.contains('Not Now', { force: true }).first().click({ multiple: true, force: true }).then(() => {
					cy.wait(3000)
				})
			})
			popUpSaveInfo = false
		}
		if (popUpTurnOnNotificaton) {
			cy.contains('Turn on Notifications').then(() => {
				cy.contains('Not Now', { force: true }).first().click({ multiple: true, force: true }).then(() => {
					cy.wait(3000)
				})
			})
			popUpTurnOnNotificaton = false
		}

		for (const username of listUsername) {
			cy.log("Processing Username " + username)
			// Search username
			cy.contains('Search', { force: true }).click({ multiple: true, force: true }).then(() => {
				cy.wait(2000)
				cy.get('input[placeholder="Search"]').type('{selectall}{backspace}').type(username, { delay: 150 })
				cy.wait(2000)
			})
			cy.contains(username, { force: true }).then(() => {
				cy.contains(username, { force: true }).click({ multiple: true, force: true }).then(() => {
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
			var htmlArticle
			cy.document().then(document => {
				htmlArticle = document.querySelectorAll("article")[0].outerHTML
				var logHtmlArticle = htmlArticle.substring(0, 80);
				cy.log("Article Username " + username + " :\n" + logHtmlArticle + "...(delete substring for full article)")
				cy.log("Creating File " + username + ".txt on " + dir)
				cy.task('createNewTextFile', dir, username)
				//cy.task('logArticle', username + " html article: \n" + htmlArticle + "\n")
				cy.writeFile(dir + '/' + username + '.txt', htmlArticle)
				cy.log("Successfully create " + username + ".txt on " + dir)
			});

			// Done
			cy.wait(3000).then(() => {
				// do post htmlArticle to backend maybe?
			})
		}
		

		it("posting on agora",() =>
		{
			if(Post_automatically) {
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
				
				cy.contains(Ambassador,{ force: true }).click()
					cy.url().expect(true)
					cy.visit(url + "/post/")

				cy.log("instagram feed is updated")
			}
				Post_automatically = false

				cy.wait(3000)

				cy.log("text is imported on" + path)
        

              
             
        })

	})
})
/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on('task', {
    logArticle (htmlArticle) {
      console.log(htmlArticle)
      return null
    },
    createNewTextFile(dir, username) {
      const fs = require('fs');
      fs.closeSync(fs.openSync(dir + '/' + username + '.txt', 'a')) // buat file txt baru
      return true
    },
    createNewFolder(dir) {
      const fs = require('fs');
      if (!fs.existsSync(dir)){
        fs.mkdirSync(dir); // buat folder baru
        return true
      }
      return false
    },
  })
}

// module.exports = {
//   e2e: {
//     viewportWidth: 1440,
//     viewportHeight: 720,
//     pageLoadTimeout: 120000,
//     setupNodeEvents(on, config) {

//     },
//   },
// };

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1440,
    viewportHeight: 720,
    pageLoadTimeout: 120000,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true
    },
  },
});

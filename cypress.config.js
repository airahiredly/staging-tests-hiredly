// cypress.config.js
const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        saveMetrics(metrics) {
          const filePath = path.join('cypress', 'reports', 'pageMetrics.json');
          fs.writeFileSync(filePath, JSON.stringify(metrics, null, 2));
          return null;
        }
      });
      return config;
    },
  },
});

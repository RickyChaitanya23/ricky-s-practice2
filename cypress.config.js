const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    pageLoadTimeout: 100000,
  },
  defaultCommandTimeout: 6000,
  retries: {
    runMode: 1,
    openMode: 0,
    },

});

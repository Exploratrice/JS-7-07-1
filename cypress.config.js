const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //uncaught:exception,
  projectId: "6dj9pu",
  e2e: {
    baseUrl: "https://qamid.tmweb.ru/",
    retries: 0,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

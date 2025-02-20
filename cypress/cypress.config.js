const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    specPattern: "cypress/e2e/**/*.cy.js", // Chemin des tests
    baseUrl: "http://localhost:3000", // Modifiez selon votre projet
  },
});

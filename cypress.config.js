const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "junit",


  reporterOptions: {
    mochaFile: "results/my-test-output-[hash].xml",
  },

  e2e: {
    experimentalModifyObstructiveThirdPartyCode: true,
chromeWebSecurity: false,
defaultCommandTimeout: 60000,

  },
    }    
  )


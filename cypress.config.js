const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    pageLoadTimeout: 90000,
    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
})

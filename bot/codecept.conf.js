exports.config = {
  tests: './automate/scripts/*.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: '',
      show: true,
      browser: 'chrome',
      chrome: {
        ignoreHTTPSErrors: true
      }
    }
  },
  include: {
    I: './automate/steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'bot'
}
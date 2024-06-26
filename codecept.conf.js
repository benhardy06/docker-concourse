exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'index.html',
      show: false,
      browser: 'firefox'
    }
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './features/*.feature',
  name: 'codeceptjs-playwright-cucumber'
}
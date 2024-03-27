const { Given, Then } = require('@cucumber/cucumber');

Given('I open the webpage', () => {
  // Replace the URL with the webpage you want to test
  I.amOnPage('https://example.com');
});

Then('I should see {string}', (text) => {
  I.see(text);
});

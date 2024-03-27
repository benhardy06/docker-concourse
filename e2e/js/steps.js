
const { I } = inject();

Given('I open the webpage', () => {
  I.amOnPage('https://example.com');
});

Then('I should see {string} text', (text) => {
  I.see(text);
});
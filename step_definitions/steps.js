const { I } = inject();
// Add in your custom step files

Given('I open the webpage', () => {
  // Replace the URL with the webpage you want to test
  I.amOnPage('file:///Users/hardyb/Documents/Projects/docker-concourse/index.html');
});

Then('I should see {string} text', (text) => {
  I.see(text);
});

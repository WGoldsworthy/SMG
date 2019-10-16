// Gleam Automator

Feature('Launch Gleam type giveaway');

// TODO: This test will need to be updated when auth is introduced
Scenario('Gleam',
  (I) => {
  	console.log("Script started.")
    I.amOnPage('http://localhost:3000');
    I.see('Search')
  });

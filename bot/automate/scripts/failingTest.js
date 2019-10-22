// Failing Test 

Feature('Failing Test');

// TODO: This test will need to be updated when auth is introduced
Scenario('Failing Test Example',
  (I) => {
    I.amOnPage('http://localhost:3000');
    I.see('String that does not exist!');
  });

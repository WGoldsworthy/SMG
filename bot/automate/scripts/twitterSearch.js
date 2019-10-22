Feature('Twitter App Search');

Scenario('Load test scenarios and check they appear @loadtest',
	(I) => {
		I.amOnPage('http://localhost:3000');
		I.see('Search');
		I.waitForElement('.testRow');
		I.see('Load');
	}
)

Scenario('Load tests and check the run button appears @loadtestbutton', 
	(I) => {
		I.amOnPage('http://localhost:3000');
		I.see('Search');
		I.waitForElement('testRow');
		I.see('Run');
	}
)
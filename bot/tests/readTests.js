var fs = require('fs');

var path = './bot/automate/scripts';

// This only gets the first scenario in the file.
const processScenarios = function(data) {
	let scenarios = [];
	var fileLength = data.toString().length;

	// Retreive the scenario string name
	let scenarioPreString = data.toString().substring(
		data.indexOf('Scenario'), 
		data.toString().indexOf('@')
	)
	const scenarioTitle = scenarioPreString.substr(
		scenarioPreString.indexOf("'")).replace("'", "");

	str = data.toString();
    searchStr = 'Scenario';

	var startIndex = 0, index, indices = [];
	while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        startIndex = index + searchStr.length;

        let scenario = {};

        let remainingString = str.substr(index);
        let scenarioTitle = remainingString.substr(
        	10, remainingString.substr(10).indexOf("'")
        )

        console.log(scenarioTitle)

		scenario.title = scenarioTitle;

		scenarios.push(scenario)
    }

	return scenarios;
}

module.exports = {
	read: new Promise(function(resolve, reject) {
		let scenarios = [];
		fs.readdir('./bot/automate/scripts', (err, files) => {
			if (err) throw err;
			files.forEach(file => {
				fs.readFile((path + "/" + file), (err, data) => {
					if (err) throw err;
					const scenario = processScenarios(data);
					if (!scenarios.includes(scenario)) {
						scenarios.push(scenario);
					}
				})
			})
		})
		resolve(scenarios);
	})
}
var fs = require('fs');

var path = './bot/automate/scripts';

// This only gets the first scenario in the file.
const checkScenario = function(data) {
	let scenario = {};
	let scenarioPreString = data.toString().substring(
		data.indexOf('Scenario'), 
		data.toString().indexOf('@')
	)
	const scenarioTitle = scenarioPreString.substr(
		scenarioPreString.indexOf("'")).replace("'", "");

	scenario.title = scenarioTitle;
	return scenario;
}

module.exports = {
	read: new Promise(function(resolve, reject) {
		let scenarios = [];
		fs.readdir('./bot/automate/scripts', (err, files) => {
			if (err) throw err;
			files.forEach(file => {
				fs.readFile((path + "/" + file), (err, data) => {
					if (err) throw err;
					const scenario = checkScenario(data);
					if (!scenarios.includes(scenario)) {
						scenarios.push(scenario);
					}
				})
			})
		})
		resolve(scenarios);
	})
}
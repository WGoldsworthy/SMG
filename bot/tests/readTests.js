var fs = require('fs');

var path = './bot/automate/scripts';

module.exports = {
	read: function() {
		let scenarios = [];
		fs.readdir('./bot/automate/scripts', (err, files) => {
			if (err) throw err;
			files.forEach(file => {
				fs.readFile((path + "/" + file), (err, data) => {
					if (err) throw err;
					const scenario = this.checkScenario(data);
					if (!scenarios.includes(scenario)) {
						scenarios.push(scenario);
					}
				})
			})
		})
		return scenarios;
	},


	checkScenario: function(data) {
		let scenarioPreString = data.toString().substring(
			data.indexOf('Scenario'), 
			data.toString().indexOf('@')
		)
		const scenario = scenarioPreString.substr(
			scenarioPreString.indexOf("'")).replace("'", "");
		console.log(scenario)
		return scenario;
	}
}
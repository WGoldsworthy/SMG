var fs = require('fs');

var path = './bot/automate/scripts';

module.exports = {
	read: function() {
		fs.readdir('./bot/automate/scripts', (err, files) => {
			if (err) throw err;
			files.forEach(file => {
				console.log(file);
				fs.readFile((path + "/" + file), (err, data) => {
					if (err) throw err;
					this.checkScenario(data);
				})
			})
		})
	},


	checkScenario: function(data) {
		// console.log(data.toString());
		// console.log(data.indexOf('Scenario'));
		console.log(data.toString().substring(
			data.indexOf('Scenario'), 
			data.toString().indexOf('@')
		))
	}
}
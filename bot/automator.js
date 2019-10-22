// LaunchAutomator

const { exec } = require('child_process');
var spawn = require('child_process').spawn

module.exports = {

	automate: function(scenario) {
		return new Promise((resolve, reject) => {

			var command = 'cd bot && npm run automate -- --grep "' + scenario.scenario + '"';

			var browserProcess = exec(command);

			browserProcess.stdout.on('data', function (data) {
			    console.log(data.toString());
			});

			browserProcess.stderr.on('data', function (data) {
			    console.log('ERR: ' + data.toString());
			});

			let passed = false;

			browserProcess.on('exit', function (code) {
				console.log('Child process exited with code ' + code.toString());
				if (code === 0) {
				  	passed = true
				}
				resolve(passed);
			});
		})
	}

}
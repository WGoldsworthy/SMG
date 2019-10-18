// LaunchAutomator

const { exec } = require('child_process');
var spawn = require('child_process').spawn

module.exports = {

	automate: function(scenario) {
		var command = 'cd bot && npm run automate -- --grep "' + scenario.scenario + '"';

		var browserProcess = exec(command);

		browserProcess.stdout.on('data', function (data) {
		  console.log(data.toString());
		});

		browserProcess.stderr.on('data', function (data) {
		  console.log('ERR: ' + data.toString());
		});

		browserProcess.on('exit', function (code) {
		  console.log('Child process exited with code ' + code.toString());
		});

		return;
	}
}
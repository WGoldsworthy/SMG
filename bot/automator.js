// LaunchAutomator

const { exec } = require('child_process');
var spawn = require('child_process').spawn

module.exports = {

	automate: function() {
		console.log("Automator Started")
				
		var browserProcess = exec('cd bot && npm run automate');

		browserProcess.stdout.on('data', function (data) {
		  console.log(data.toString());
		});

		browserProcess.stderr.on('data', function (data) {
		  console.log('ERR: ' + data.toString());
		});

		browserProcess.on('exit', function (code) {
		  console.log('child process exited with code ' + code.toString());
		});

		console.log("automator finished")
	}
}
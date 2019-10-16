// LaunchAutomator

const { exec } = require('child_process');


module.exports = {

	automate: function() {
		console.log("Automator Started")
		exec('cd bot && npm run automate', (err, stdout, stderr) => {
		  if (err) {
		    // node couldn't execute the command
		    return;
		  }

		  // the *entire* stdout and stderr (buffered)
		  console.log(`stdout: ${stdout}`);
		  console.log(`stderr: ${stderr}`);
		});
		console.log("automator finished")
	}
}
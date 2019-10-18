const axios = require('axios');

const api = axios.create({
	baseURL: 'http://localhost:3001',
});


api.automate = (scenario) => {
	console.log(scenario);
	api.post('/automate', {scenario: scenario.title}).then(res => {
		// console.log(res);
	})
}

api.getScenarios = new Promise(function(resolve, reject) {
	api.get('/tests/scenarios').then(res => {
		resolve(res);
	})
});


export default api;
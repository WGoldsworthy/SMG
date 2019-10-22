const axios = require('axios');

const api = axios.create({
	baseURL: 'http://localhost:3001',
});


api.automate = (scenario) => {
	return new Promise((resolve, reject) => {
		api.post('/automate', {scenario: scenario.title}).then(res => {
			resolve(res.data);
		});
	})
}

api.getScenarios = new Promise(function(resolve, reject) {
	api.get('/tests/scenarios').then(res => {
		resolve(res);
	})
});


export default api;
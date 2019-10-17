const axios = require('axios');

const api = axios.create({
	baseURL: 'http://localhost:3001',
});


api.automate = () => {
	api.post('/automate', {}).then(res => {
		// console.log(res);
	})
}

api.getScenarios = new Promise(function(resolve, reject) {
	api.get('/tests/scenarios').then(res => {
		return res;
	})
});


export default api;
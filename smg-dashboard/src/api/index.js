const axios = require('axios');

const api = axios.create({
	baseURL: 'http://localhost:3001',
});

api.getTweets = new Promise(function(resolve, reject) {
	api.get('/search').then(res => {
		resolve(res);
	})
});

api.searchTweets = (query) => new Promise(function(resolve, reject) {
	api.get('/search?query=' + query).then(res => {
		resolve(res);
	});
})

api.automate = () => {
	api.post('/automate', {}).then(res => {
		// console.log(res);
	})
}

api.getScenarios = () => {
	api.get('/tests/scenarios').then(res => {
		console.log(res);
		return res;
	})
}


export default api;
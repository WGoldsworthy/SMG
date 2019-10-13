const axios = require('axios');

const api = axios.create({
	baseURL: 'http://localhost:3001',
});

api.getTweets = new Promise(function(resolve, reject) {
	api.get('/search').then(res => {
		resolve(res);
	})
});

export default api;
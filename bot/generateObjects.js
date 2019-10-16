var fs = require('fs');

module.exports = {
	generate: function(variables) {
		var obj = {};
		obj.url = variables.url;
		return obj;
	}
}
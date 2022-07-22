const axios = require('axios');
const settings = require('./settings');

module.exports = {
  type: "credentials",
  sessionExpiryTime: 86400,
  users: function(username) {
      return new Promise(function(resolve) {
        var user = { username: username, permissions: "*" };
        resolve(user);
      });
  },
  authenticate: function(username,password) {
      return new Promise(function(resolve) {
		var user = null;
		var host = process.env.AUTHENTICATION_HOST;	// e.g. http://frascati.projectkeep.io
		if ("" == host) {
			console.log("WARNING: Host name not configured in Docker container's environment variables, continuing without authentication. See README for more details.");
			user = { username: "Anonymous", permissions: "*" };
			resolve(user);
		}
		var params = {
            method: "POST",
            url: host + "/api/v1/auth",
			headers: {'Content-Type' : 'application/json'},
            data: {'username': username, 'password': password}
        };

		axios.request(params)
        .then(function (response) {
            var status = response.status;
				if (status == 200) {
					console.log('Authenticated');
          process.env.AUTHENTICATION_USERNAME =username;
          process.env.AUTHENTICATION_PASSWORD = password;
					user = { username: username, permissions: "*" };
					resolve(user);
				} else {
					console.log('Incorrect username or password');
					resolve(null);
				}
          }).catch(function (error) {
            console.log("Authentication Error");
            console.log(error);
            resolve(null);
          });
      });
  },
  default: function() {
      return new Promise(function(resolve) {
          resolve(null);
      });
  }
}
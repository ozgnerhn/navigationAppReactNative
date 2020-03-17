const api = user => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (user.email === 'erhan') {
				reject({ email: 'email already use.' })
			}
			resolve();
		}, 2000)
	})
};

module.exports = api;
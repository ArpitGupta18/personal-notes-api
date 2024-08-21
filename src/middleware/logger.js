// displays all the request method and url along with the accessed date in the console
const logger = (req, res, next) => {
	console.log(`${req.method} ${req.url} - ${new Date()}`);
	next();
};

module.exports = logger;

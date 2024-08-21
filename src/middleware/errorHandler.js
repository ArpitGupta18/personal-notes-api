// responses with an error message incase of any error
const errorHandler = (err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ message: "Something went wrong!" });
};

module.exports = errorHandler;

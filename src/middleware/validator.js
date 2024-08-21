// verifies whether the request body contains title and content to perform operation
const validateNote = (req, res, next) => {
	const { title, content } = req.body;
	if (!title || !content) {
		return res
			.status(404)
			.json({ message: "Title and content are required" });
	}
	next();
};

// validates whether the id passed in the parameter is valid (i.e., number)
const validateId = (req, res, next) => {
	const { id } = req.params;
	if (isNaN(parseInt(id))) {
		return res.status(400).json({ message: "Invalid ID format" });
	}

	next();
};

module.exports = { validateNote, validateId };

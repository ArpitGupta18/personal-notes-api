const validateNote = (req, res, next) => {
	const { title, content } = req.body;
	if (!title || !content) {
		return res
			.status(404)
			.json({ message: "Title and content are required" });
	}
	next();
};

const validateId = (req, res, next) => {
	const { id } = req.params;
	// console.log(id);
	// console.log(typeof id);
	// console.log(isNaN(parseInt(id)));
	if (isNaN(parseInt(id))) {
		return res.status(400).json({ message: "Invalid ID format" });
	}

	next();
};

module.exports = { validateNote, validateId };

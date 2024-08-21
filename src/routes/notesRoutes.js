const express = require("express");
const router = express.Router();
const {
	getNotes,
	getNotesById,
	createNote,
	updateNote,
	deleteNote,
} = require("../controller/notesController");
const { validateNote, validateId } = require("../middleware/validator");
const logger = require("../middleware/logger");

// using the logger before every request
router.use(logger);

// router with the http methods linked with the functions in the controller
router.get("/", getNotes);
router.get("/:id", validateId, getNotesById);
router.post("/", validateNote, createNote);
router.put("/:id", validateId, validateNote, updateNote);
router.delete("/:id", validateId, deleteNote);

module.exports = router;

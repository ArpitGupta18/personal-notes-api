// import required modules
const fs = require("fs");
const path = require("path");
const dbPath = path.join(__dirname, "../../data/db.json");
let db = require(dbPath);

// save changes to the data made to the db.json file
const saveToDb = () => {
	fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
};

// gets all note from db.json
const getNotes = (req, res) => {
	try {
		res.status(200).json(db.notes);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// gets a specific note based on id
const getNotesById = (req, res) => {
	const notes = db.notes.find((note) => note.id == req.params.id);

	if (notes) {
		res.status(200).json(notes);
	} else {
		res.status(404).json({ message: "Note not found" });
	}
};

// adds a new note to db.json
const createNote = (req, res) => {
	const { title, content } = req.body;
	const newNote = {};
	newNote.id = Date.now();
	newNote.title = title;
	newNote.content = content;
	db.notes.push(newNote);
	saveToDb();
	res.status(201).json(newNote);
};

// updates an existing note based on id
const updateNote = (req, res) => {
	const noteIndex = db.notes.findIndex((note) => note.id == req.params.id);
	const { title, content } = req.body;

	if (noteIndex !== -1) {
		const updatedNote = {
			id: db.notes[noteIndex].id,
			title: title,
			content: content,
		};
		db.notes[noteIndex] = updatedNote;

		saveToDb();
		res.status(200).json(updatedNote);
	} else {
		res.status(404).json({ message: "Note not found" });
	}
};

// deletes an existing note based on id
const deleteNote = (req, res) => {
	const originalLength = db.notes.length;
	db.notes = db.notes.filter((note) => note.id != req.params.id);
	saveToDb();
	if (db.notes.length < originalLength) {
		res.status(200).json({ message: "Note deleted successfully" });
	} else {
		res.status(404).json({ message: "Note not found" });
	}
};

// exporting all the functions to use it in another file
module.exports = { getNotes, getNotesById, createNote, updateNote, deleteNote };

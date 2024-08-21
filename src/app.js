// importing all the required modules
const express = require("express");
const cors = require("cors");
const notesRoutes = require("./routes/notesRoutes");
const errorHandler = require("./middleware/errorHandler");

// creating an express app
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// setting up the routes for api endpoints
app.use("/api/notes", notesRoutes);

app.use(errorHandler);

// listening to the program on http://localhost:3000/
app.listen(PORT, () =>
	console.log(`Server running at http://localhost:${PORT}/`)
);

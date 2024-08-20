const express = require("express");
const cors = require("cors");
const notesRoutes = require("./routes/notesRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/notes", notesRoutes);

app.use(errorHandler);

app.listen(PORT, () =>
	console.log(`Server running at http://localhost:${PORT}/`)
);

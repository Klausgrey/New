const express = require("express");

const app = express();
app.use(express.json());

const Database = require("better-sqlite3");
const db = new Database("notes.db");

db.prepare(
	`
	CREATE TABLE IF NOT EXISTS notes (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		title TEXT NOT NULL,
		content TEXT NOT NULL
	)
`,
).run();

app.get("/notes", function (req, res) {
	const result = db.prepare("SELECT * FROM notes").all();
	res.json(result);
});

app.post("/notes", function (req, res) {
	const title = req.body.title;
	const content = req.body.content;

	db.prepare("INSERT INTO notes (title, content) VALUES (?, ?)").run(
		title,
		content,
	);
	res.json(`Your ${title} has been created successfully`);
});


app.delete("/notes/:id", function (req, res) {
	const noteId = Number(req.params.id)
	db.prepare("DELETE FROM notes WHERE id = (?)").run(noteId)
	res.json(`Note with an id of ${noteId} has been deleted successfully`)
})

app.listen(3000, () => {
	console.log("The server is running xoxo");
});

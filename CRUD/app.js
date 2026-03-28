const express = require("express");
const Database = require("better-sqlite3");
const db = new Database("books.db");
require("dotenv").config()
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

db.prepare(
	`
	CREATE TABLE IF NOT EXISTS books (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		title TEXT NOT NULL,
		author TEXT NOT NULL
	)
	`,
).run();

app.get("/books", async (req, res) => {
	const result = db.prepare(`SELECT * FROM books`).all();
	res.json(result);
});

app.get("/books/:id", async (req, res) => {
	const bookID = req.params.id;
	const result = db.prepare(`SELECT * FROM books WHERE id = (?)`).get(bookID);
	res.json(result);
});

app.post("/books", async (req, res) => {
	const { title, author } = req.body;

	db.prepare("INSERT INTO books (title, author) VALUES (?, ?)").run(
		title,
		author,
	);

	res.json({ message: "Created successfully" });
});

app.put("/books/:id", async (req, res) => {
	const bookID = req.params.id;
	const { title, author } = req.body;
	db.prepare("UPDATE books SET title = ?, author = ? WHERE id = ?").run(
		title,
		author,
		bookID
	);

	res.json({ message: "Updated successfully" });
});

app.delete("/books/:id", function (req, res) {
	const bookId = Number(req.params.id);
	db.prepare("DELETE FROM books WHERE id = (?)").run(bookId);
	res.json(`Book with an id of ${bookId} has been deleted successfully`);
});

app.listen(PORT, () => {
	console.log("Server running");
});

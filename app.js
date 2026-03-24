const express = require("express")

const app = express()
app.use(express.json())

const Database = require("better-sqlite3")
const db = new Database("notes.db")

db.prepare(`
	CREATE TABLE IF NOT EXISTS notes (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		title TEXT NOT NULL,
		content TEXT NOT NULL
	)
`).run();


app.listen(3000, () => {
	console.log("The server is running xoxo")
})

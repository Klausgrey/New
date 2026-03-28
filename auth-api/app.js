const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Database = require("better-sqlite3");
const db = new Database("auth.db");
const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT

const app = express();
app.use(express.json());

db.prepare(
	`
	CREATE TABLE IF NOT EXISTS auth (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		username TEXT NOT NULL,
		password TEXT NOT NULL
	)
	`,
).run();

app.post("/register", async (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	const hashedPassword = await bcrypt.hash(password, 10);

	db.prepare(`INSERT INTO auth(username, password) VALUES (?, ?)`).run(
		username,
		hashedPassword,
	);

	res.status(201).json({ message: "Register successfully" });
});

app.post("/login", async (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	const user = db
		.prepare("SELECT * FROM auth WHERE username = (?)")
		.get(username);

	if (!user) {
		return res.status(401).json({ message: "User not found" });
	}

	const match = await bcrypt.compare(password, user.password);
	if (!match) {
		return res.status(401).json({ message: "Invalid password" });
	}

	const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET);
	res.json({ token });
});

const verifyToken = (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		return res.status(401).json({ message: "No token provided" });
	}
	const token = authHeader.split(" ")[1];

	if (!token) {
		res.status(400).json({ message: "Bad request" });
	}
	try {
		jwt.verify(token, JWT_SECRET);
		next();
	} catch (err) {
		res.status(401).json({ message: "Invalid token" });
	}
};

app.get("/protected", verifyToken, async (req, res) => {
	res.json({ message: "You have access" });
});

app.listen(PORT, () => {
	console.log("Running");
});

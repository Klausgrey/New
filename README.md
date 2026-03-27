# Node.js Projects Collection

A collection of Node.js applications including CLI tools, APIs, and games.

## Projects

### Todo CLI

A command-line todo list manager that persists tasks to a local `todo.json` file.

**Usage:**

```bash
node todo.js add "your task"   # Add a todo
node todo.js list              # List all todos
node todo.js delete <number>   # Delete a todo by its number
```

**Example:**

```bash
node todo.js add "Buy groceries"
node todo.js add "Walk the dog"
node todo.js list
# 1. Buy groceries
# 2. Walk the dog
node todo.js delete 1
```

### Guess Number Game

An interactive number guessing game where you try to guess a random number between 1 and 100.

**Usage:**

```bash
node guess.js
```

**How to Play:**

- The game picks a random number between 1 and 100
- Enter your guess when prompted
- The game will tell you if your guess is too high, too low, or correct
- Keep guessing until you find the right number!

### Weather App

A command-line weather utility that fetches current weather data using the OpenWeatherMap API.

**Setup:**

1. Create a `.env` file in the root directory
2. Add your OpenWeatherMap API key: `apiKey=YOUR_API_KEY`

**Usage:**

```bash
node weather.js
```

### Notes API

A RESTful API for managing notes with an SQLite database. Built with Express.js and better-sqlite3.

**Endpoints:**

- `GET /notes` - Retrieve all notes
- `POST /notes` - Create a new note

**Usage:**

```bash
npm install
node app.js
```

### HTTP Server

A simple HTTP server with basic routing using Node.js native `http` module.

**Routes:**

- `GET /` - Home page
- `GET /about` - About page
- `GET *` - 404 Page Not Found

**Usage:**

```bash
node server.js
# Server runs on http://localhost:3000
```

### Authentication API

An API for authentication functionality with SQLite database support.

**Location:** `auth-api/` directory

**Usage:**

```bash
node auth-api/app.js
```

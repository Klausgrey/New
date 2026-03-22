# Node.js CLI Projects

A collection of command-line applications built with Node.js.

## Todo CLI

A simple command-line todo list app. Todos are saved to a local `todo.json` file.

### Usage

```bash
node todo.js add "your task"   # Add a todo
node todo.js list              # List all todos
node todo.js delete <number>   # Delete a todo by its number
```

### Example

```bash
node todo.js add "Buy groceries"
node todo.js add "Walk the dog"
node todo.js list
# 1. Buy groceries
# 2. Walk the dog
node todo.js delete 1
```

## Guess Number Game

An interactive number guessing game where you try to guess a random number between 1 and 100.

### Usage

```bash
node guess.js
```

### How to Play

- The game picks a random number between 1 and 100
- Enter your guess when prompted
- The game will tell you if your guess is too high, too low, or correct
- Keep guessing until you find the right number!

# Todo CLI

A simple command-line todo list app built with Node.js. Todos are saved to a local `todo.json` file.

## Usage

```bash
node todo.js add "your task"   # Add a todo
node todo.js list              # List all todos
node todo.js delete <number>   # Delete a todo by its number
```

## Example

```bash
node todo.js add "Buy groceries"
node todo.js add "Walk the dog"
node todo.js list
# 1. Buy groceries
# 2. Walk the dog
node todo.js delete 1
```


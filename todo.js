const fs = require("fs");

function loadTodos() {
	if (fs.existsSync("todo.json")) {
		const file = JSON.parse(fs.readFileSync("todo.json", "utf8"));
		return file;
	} else {
		return [];
	}
}

function saveTodos(todo) {
	fs.writeFileSync("todo.json", JSON.stringify(todo));
}

const addToList = (args) => {
	if (args !== "add") {
		return false;
	}
	const arr = loadTodos();
	const args2 = process.argv[3];

	if (!args2) {
		return console.log("There was no argument provided");
	} else {
		arr.push(args2);
		saveTodos(arr);
	}
};

const listTodos = (args) => {
	if (args !== "list") {
		return false;
	}
	const arr = loadTodos();
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		result.push(`${i + 1}. ${arr[i]}`);
	}
	return result;
};

const deleteList = (args) => {
	if (args !== "delete") {
		return false;
	}
	const arr = loadTodos();
	const args2 = process.argv[3];
	arr.splice(args2 - 1, 1);
	const data = saveTodos(arr);
};

const args = process.argv[2];

addToList(args);
const list = listTodos(args);
if (list) list.forEach((item) => console.log(item));
deleteList(args);

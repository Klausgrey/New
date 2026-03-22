const fs = require('fs');

function loadTodos() {
	if (fs.existsSync("todo.json")) {
		const file = JSON.parse(fs.readFileSync("todo.json","utf8"))
		return file
	} else {
		return []
}
}

function saveTodos(todo) {
	fs.writeFileSync("todo.json", JSON.stringify(todo))
}

const args = process.argv[2]
if (args === "add") {
	// add to the list
	const arr = loadTodos()
	const args2 = process.argv[3]
	if (!args2) {
		console.log("There was no argument provided")
	} else {
		arr.push(args2)
		saveTodos(arr)
	}

} else if (args === "list") {
	// display the list of todos
	const arr = loadTodos();
	for (let i = 0; i < arr.length; i++) {
		console.log(`${i + 1}. ${arr[i]}`)
	}
} else if (args === "delete") {
	// delete from the list
	const arr = loadTodos();
	const args2 = process.argv[3];
	arr.splice(args2 - 1, 1)
	saveTodos(arr)

} else {
	console.log("There was an error, please try again")
}
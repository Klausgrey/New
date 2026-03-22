let rand = Math.floor(Math.random() * 100) + 1;
const readLine = require("readline");

const rL = readLine.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// while (true) {
// 	rL.question("Take a guess: ", function (answer) {
// 		if (parseInt(answer) === rand) {
// 			console.log("You guessed correctly, congrats");
// 			rL.close();
// 			break;
// 		} else if (parseInt(answer) < rand) {
// 			console.log("Too low");
// 		} else if (parseInt(answer) > rand) {
// 			console.log("Too high");
// 			// } else {
// 			// 	console.log("");
// 		}
// 	});
// }

function askQuestion() {
	rL.question("Take a guess: ", function (answer) {
		if (parseInt(answer) < rand) {
			console.log("Too low");
			askQuestion()
		} else if (parseInt(answer) > rand) {
			console.log("Too high");
			askQuestion();
		}
		else {
			console.log("You guessed correctly, congrats");
			rL.close();
		}
	});
}

askQuestion();


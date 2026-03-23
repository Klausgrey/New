const http = require("http");

const server = http.createServer(function (req, res) {

	if (req.url === "/") {
		res.writeHead(200, { "Content-Type": "text/plain" });
		res.end("This is the home page")
	} else if (req.url === "/about") {
		res.writeHead(200, { "Content-Type": "text/plain" });
		res.end("This is the about page");
	} else {
		res.writeHead(404, { "Content-Type": "text/plain" });
		res.end("Page not found");
	}
});


server.listen(3000, function () {
	console.log("Server is running on port 3000")
})
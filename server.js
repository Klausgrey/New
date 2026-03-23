const http = require("http");

const server = http.createServer(function (req, res) {
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end("Hello World");
	console.log(req.url)
	// something goes her
});


server.listen(3000, function () {
	console.log("Server is running on port 3000")
})
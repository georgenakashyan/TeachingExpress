const express = require("express");
const app = express();

app.get("/", (req, res) => {
	console.log("Here");
	//res.send("hi");                               // Sending just a message
	//res.sendStatus(400);                          // Sending just a status
	//res.status(401).send("error");                // Sending status and a message
	//res.status(501).json({ message: "error" });   // Sending status code and json
	//res.download("server.js");                    // Sending a file to be downloaded
});

app.listen(3000);

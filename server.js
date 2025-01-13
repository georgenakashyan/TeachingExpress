const express = require("express");
const app = express();

app.set("view engine", "ejs");
// Since everything goes top down, all routes below this point will use the logger middleware. If we want to limit it see the commend below this.
app.use(logger);

// If we want to control what routes our middleware logger works with, we can just pass it in as another parameter instead of using app.use(logger). You can put at many functions here as you want, you can even put logger twice and it will run twice.
app.get("/", logger, (req, res) => {
	console.log("Here");
	//res.send("hi");                               // Sending just a message
	//res.sendStatus(400);                          // Sending just a status
	//res.status(401).send("error");                // Sending status and a message
	//res.status(501).json({ message: "error" });   // Sending status code and json
	//res.download("server.js");                    // Sending a file to be downloaded
	res.render("index", { text: "world" });
});

// Nested routes for users
const userRouter = require("./routes/users");
app.use("/users", userRouter);

function logger(req, res, next) {
	console.log(req.originalUrl);
	next();
}

app.listen(3000);

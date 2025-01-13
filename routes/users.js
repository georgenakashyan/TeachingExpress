app.get("/users", (req, res) => {
	res.send("User List");
});

app.get("/users/new", (req, res) => {
	res.send("User New Form");
});

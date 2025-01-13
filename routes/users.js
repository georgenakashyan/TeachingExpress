const express = require("express");
const router = express.Router();
// Express reads top to bottom, so put your routes in order (static routes before dynamic routes).
// Example, if we send a get request to /users/new, it hits the second route listed here rather than the dynamic route.

// If we want to use some middleware ONLY here, we can declare it below and just call:
/* router.use(logger) */

// Don't need /users before everything because it's taken care of in server.js
router.get("/", (req, res) => {
	console.log(req.query.name);
	res.send("User List");
});

router.get("/new", (req, res) => {
	// You can pass information in json like this. It will show up in locals.firstName
	res.render("users/new", { firstName: "test" });
});

router.post("/", (req, res) => {
	const isValid = true;
	if (isValid) {
		users.push({ firstName: req.body.firstName });
		res.redirect(`/users/${users.length - 1}`);
	} else {
		console.log("Error");
		res.render("users/new", { firstName: req.body.firstName });
	}
});

// To add a dymanic route you can use a colon followed by the variable name
// The "id" is the variable name here, it matches in "req.params.id" and "/:id"
/* router.get("/:id", (req, res) => {
	res.send(`Get user with ID ${req.params.id}`);
}); */

// Instead of adding multiple router commands for the same route, you can chain them together like this.
router
	.route("/:id")
	.get((req, res) => {
		// Read the router.param function below to see how we set req.user
		console.log(req.user);
		res.send(`Get user with ID ${req.params.id}`);
	})
	.put((req, res) => {
		res.send(`Update user with ID ${req.params.id}`);
	})
	.delete((req, res) => {
		res.send(`Delete user with ID ${req.params.id}`);
	});

// Can set parameters for any other route in users.
// This is good if you need to do this for multiple routes, instead do it once and call it like a variable.
const users = [{ name: "Kyle" }, { name: "Sally" }];
router.param("id", (req, res, next, id) => {
	req.user = users[id];
	next();
});

module.exports = router;

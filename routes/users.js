const express = require("express");
const router = express.Router();

// Don't need /users before everything because it's taken care of in server.js
router.get("/", (req, res) => {
	res.send("User List");
});

router.get("/new", (req, res) => {
	res.send("User New Form");
});

router.post("/", (req, res) => {
	res.send("User created");
});

// To add a dymanic route you can use a colon followed by the variable name
// The "id" is the variable name here, it matches in "req.params.id" and "/:id"
router.get("/:id", (req, res) => {
	res.send(`Get user with ID ${req.params.id}`);
});

module.exports = router;

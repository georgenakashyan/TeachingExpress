const express = require("express");
const router = express.Router();

// Don't need /users before everything because it's taken care of in server.js
router.get("/", (req, res) => {
	res.send("User List");
});

router.get("/new", (req, res) => {
	res.send("User New Form");
});

module.exports = router;

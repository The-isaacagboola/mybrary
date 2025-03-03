const express = require("express");
const router = express.Router();

// All authours
router.get("/", (req, res) => {
  res.render("index");
});

// New  Author Route
module.exports = router;

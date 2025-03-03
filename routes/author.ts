import express from "express";
const router = express.Router();

// All authors
router.get("/", (req, res) => {
  res.render("authors/index");
});

// New  Author Route
router.get("/new", (req, res) => {
  res.render("authors/new");
});

//Create author route
router.post("/", (req, res) => {
  res.send("Create an Author");
});

module.exports = router;

//=====================================================================//
// Variables
//=====================================================================//
const express = require("express");
const router = express.Router();
const songs = require("../data/songs");
let limit = 0;

//=====================================================================//
// Query function, using record limit as query parameter
//=====================================================================//
router.route("/").get((req, res) => {
  limit = parseInt(req.query.limit);
  const song = songs.slice(0, limit);
  res.json({ song });
});

router.get("/:id", (req, res, next) => {
  const song = songs.find((u) => u.id === req.params.id);

  if (song) res.json({ song });
  else next();
});

module.exports = router;

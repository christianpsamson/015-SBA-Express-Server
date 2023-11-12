//=====================================================================//
// Variables
//=====================================================================//
const express = require("express");
const router = express.Router();
const stats = require("../data/stats");
let limit = 0;
let stat = "";

//=====================================================================//
// Custom middleware function
//=====================================================================//
const limitSongs = (req, res, next) => {
  limit = parseInt(req.query.limit);

  // Handle request without query parameter
  if (!limit || limit < 0) {
    limit = stats.length;
  }

  // Utilize slice() to limit the number of records
  stat = stats.slice(0, limit);

  next();
};

router.use(limitSongs);

//=====================================================================//
// Query function, using record limit as query parameter
// Router: "/stats"
//=====================================================================//
router.route("/").get((req, res) => {
  res.json({ stat });
});

//=====================================================================//
// Router: 'stats/:id"
//=====================================================================//
router.get("/:id", (req, res, next) => {
  const stat = stats.find((u) => u.id === req.params.id);

  // Create an error and pass it to the next middleware
  if (!stat) {
    const error = new Error("Song Stats not found");
    error.status = 404;
    return next(error);
  }

  res.json({ stat });
});

module.exports = router;

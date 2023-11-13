//=====================================================================//
// Data Module
// Req: Use at least three different data categories.
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
// Req: Create and use at least two pieces of custom middleware.
//      Include query parameters for data filtering, where appropriate.
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
// Req: Create GET routes for all data that should be exposed to the client.
//=====================================================================//
router.route("/").get((req, res) => {
  res.json({ stat });
});

//=====================================================================//
// Router: 'stats/:id"
// Req: Create and use error-handling middleware.
//      Utilize route parameters, where appropriate.
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

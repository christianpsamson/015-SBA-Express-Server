//=====================================================================//
// Data Module
// Req: Use at least three different data categories.
//=====================================================================//
// Variables
//=====================================================================//
const express = require("express");
const router = express.Router();
const songs = require("../data/songs");
let limit = 0;
let song = "";

//=====================================================================//
// Custom middleware function: Get the limit request
// Req: Create and use at least two pieces of custom middleware.
//      Include query parameters for data filtering, where appropriate.
//=====================================================================//
const limitSongs = (req, res, next) => {
  limit = parseInt(req.query.limit);
  console.log("middleware function");

  // Handle request without query parameter
  if (!limit || limit < 0) {
    limit = songs.length;
  }
  next();
};

router.use(limitSongs);

//=====================================================================//
// Query function: Use record limit as query parameter
// Route: "/songs"
// Req: Create GET routes for all data that should be exposed to the client.
//=====================================================================//
router.route("/").get((req, res) => {
  console.log("/songs route");
  // Utilize slice() to limit the number of records
  song = songs.slice(0, limit);
  res.json({ song });
});

//=====================================================================//
// Route: 'songs/:id"
// Req: Create and use error-handling middleware.
//      Utilize route parameters, where appropriate.
//      Bonus: REGEX
//=====================================================================//
router.get("/:id", (req, res, next) => {
  const reqID = req.params.id;
  const idPattern = /^[a-zA-Z0-9]{8}$/; //ID must be 8 characters long

  if (!idPattern.test(reqID)) {
    const error = new Error("Song ID is invalid. It must be 8 characters.");
    error.status = 404;
    return next(error);
  }

  const song = songs.find((u) => u.id === req.params.id);

  // Create an error and pass it to the next middleware
  if (!song) {
    const error = new Error("Song not found");
    error.status = 404;
    return next(error);
  }

  res.json({ song });
  next();
});

module.exports = router;

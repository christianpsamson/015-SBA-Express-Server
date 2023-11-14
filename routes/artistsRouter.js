//=====================================================================//
// Data Module
// Req: Use at least three different data categories.
//=====================================================================//
// Variables
//=====================================================================//
const express = require("express");
const router = express.Router();
const artists = require("../data/artists");
let limit = 0;
let artist = "";

//=====================================================================//
// Custom middleware function
// Req: Create and use at least two pieces of custom middleware.
//      Include query parameters for data filtering, where appropriate.
//=====================================================================//
const limitSongs = (req, res, next) => {
  limit = parseInt(req.query.limit);

  // Handle request without query parameter
  if (!limit || limit < 0) {
    limit = artists.length;
  }

  // Utilize slice() to limit the number of records
  artist = artists.slice(0, limit);

  next();
};

router.use(limitSongs);

//=====================================================================//
// Query function, using record limit as query parameter
// Router: "/artists"
// Req: Create GET routes for all data that should be exposed to the client.
//=====================================================================//
router.route("/").get((req, res) => {
  res.json({ artist });
});

//=====================================================================//
// Router: 'artists/:id"
// Req: Create and use error-handling middleware.
//      Utilize route parameters, where appropriate.
//      Bonus: REGEX
//=====================================================================//
router.get("/:id", (req, res, next) => {
  const reqID = req.params.id;
  const idPattern = /^[a-zA-Z0-9]{8}$/; //ID must be 8 characters long

  if (!idPattern.test(reqID)) {
    const error = new Error("Artist ID is invalid. It must be 8 characters.");
    error.status = 404;
    return next(error);
  }

  const artist = artists.find((u) => u.id === reqID);

  // Create an error and pass it to the next middleware
  if (!artist) {
    const error = new Error("Artist not found");
    error.status = 404;
    return next(error);
  }

  res.json({ artist });
});

module.exports = router;

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
//=====================================================================//
router.route("/").get((req, res) => {
  res.json({ artist });
});

//=====================================================================//
// Router: 'artists/:id"
//=====================================================================//
router.get("/:id", (req, res, next) => {
  const artist = artists.find((u) => u.id === req.params.id);

  // Create an error and pass it to the next middleware
  if (!artist) {
    const error = new Error("Artist not found");
    error.status = 404;
    return next(error);
  }

  res.json({ artist });
});

module.exports = router;

//=====================================================================//
// Variables
//=====================================================================//
const express = require("express");
const app = express();
const port = 3000;
const songsRouter = require("./routes/songsRouter");
const artistsRouter = require("./routes/artistsRouter");
const statsRouter = require("./routes/statsRouter");

app.set("view engine", "ejs");

app.use(express.static("public"));

//=====================================================================//
// Custom middleware function to render API doc using template engine
//=====================================================================//
const apiDoc = (req, res) => {
  res.render("index", {
    title: "API | Spotify Top 100 Songs",
    baseURL: "http://localhost:3000/",
    endPointSongs: "http://localhost:3000/songs",
    endPointArtists: "http://localhost:3000/artists",
    endPointStats: "http://localhost:3000/stats",
    urlLimit: "http://localhost:3000/songs?limit=10",
  });
};

//=====================================================================//
// Render the template engine for base URL
//=====================================================================//
app.get("/", (req, res) => {
  apiDoc(req, res);
});

//=====================================================================//
// Route handlers
//=====================================================================//
app.use("/songs", songsRouter);
app.use("/artists", artistsRouter);
app.use("/stats", statsRouter);

//=====================================================================//
// Render the template engine when URL is incorrect
//=====================================================================//
app.get("/:d", (req, res) => {
  apiDoc(req, res);
});

//=====================================================================//
// Error-handling middleware
//=====================================================================//
app.use((err, req, res, next) => {
  console.error(err);
  res
    .status(err.status || 500)
    .json({ error: err.message || "Internal Server Error" });
});

//=====================================================================//
// app.listen
//=====================================================================//
app.listen(port, () => {
  console.log("Server listening to port");
});

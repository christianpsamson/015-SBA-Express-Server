const express = require("express");
const app = express();
const port = 3000;
const songsRouter = require("./routes/songsRouter");
const artistsRouter = require("./routes/artistsRouter");
const statsRouter = require("./routes/statsRouter");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "API | Spotify Top 100 Songs",
    baseURL: "http://localhost:3000/",
    endPointSongs: "http://localhost:3000/songs",
    endPointArtists: "http://localhost:3000/artists",
    endPointStats: "http://localhost:3000/stats",
    urlLimit: "http://localhost:3000/songs?limit=10",
  });
});

app.use("/songs", songsRouter);
app.use("/artists", artistsRouter);
app.use("/stats", statsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res
    .status(err.status || 500)
    .json({ error: err.message || "Internal Server Error" });
});

app.listen(port, () => {
  console.log("Server listening to port");
});

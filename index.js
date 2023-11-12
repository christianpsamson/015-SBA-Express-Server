const express = require("express");
const app = express();
const port = 3000;

const TopSongs = require("./routes/songsRouter");

app.use("/songs", TopSongs);

app.listen(port, () => {
  console.log("Server listening to port");
});

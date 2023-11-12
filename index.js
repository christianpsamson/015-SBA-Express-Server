const express = require("express");
const app = express();
const port = 3000;
const songsRouter = require("./routes/songsRouter");
const artistsRouter = require("./routes/artistsRouter");
const statsRouter = require("./routes/statsRouter");

// Custom middleware to add a response header
app.use((req, res, next) => {
  // Set a custom header named "X-Custom-Header"
  res.setHeader("X-Custom-Header", "Hello from custom middleware");

  // Continue to the next middleware or route handler
  next();
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

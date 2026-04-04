const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth",require("./routes/auth"));

app.get("/", (req, res) => {
  res.send("API running...");
});

module.exports = app;
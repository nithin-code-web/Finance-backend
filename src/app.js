const express = require("express");

const app = express();

app.use(express.json());

app.use("/api/auth",require("./routes/auth"));
app.use("/api/users",require("./routes/user"));


app.get("/", (req, res) => {
  res.send("API running...");
});

module.exports = app;
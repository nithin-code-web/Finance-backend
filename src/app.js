const express = require("express");

const app = express();
const errMiddleware = require("./middleware/errMiddleware");

app.use(express.json());

app.use("/api/auth",require("./routes/auth"));
app.use("/api/users",require("./routes/user"));
app.use("/api/transactions",require("./routes/transactions"));
app.use("/api/dashboard",require("./routes/dashboard"));


app.get("/", (req, res) => {
  res.send("API running...");
});

app.use(errMiddleware);

module.exports = app;
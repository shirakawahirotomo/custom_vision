const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("Hello World(*'▽')");
});

//app.listen(3000, function () {});
process.env.NOW_REGION ? (module.express = app) : app.listen(PORT);

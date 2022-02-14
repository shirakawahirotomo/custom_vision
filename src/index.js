const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  //res.send("Hello World(*'▽')");
  res.json({ key: 1 });
});

app.get("/api/get", (req, res) => {
  res.send("Hello World(*'▽')/api/getからやで");
});

/*app.listen(3000, () => {
  console.log("Application started");
});
*/
process.env.NOW_REGION ? (module.express = app) : app.listen(PORT);

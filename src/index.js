const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; //Heroku用

/*app.get("/", (req, res) => {
  //res.send("Hello World(*'▽')");
  res.json({ key: 2 });
});
*/
app.get("/api/get", (req, res) => {
  res.send("Hello World(*'▽')/api/getからやで");
});

//ローカル用サーバ
/*app.listen(3000, () => {
  console.log("Application started");
});*/
process.env.NOW_REGION ? (module.express = app) : app.listen(PORT); //Heroku用のサーバ樹立

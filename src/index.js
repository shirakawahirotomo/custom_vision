const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; //Heroku用
const bodyParser = require("body-parser");
//const post = require("v1/post");

app.get("/", (req, res) => {
  //res.send("Hello World(*'▽')");
  res.json({ message: "こちらはルートパスです(V)o￥o(V)" });
});

app.get("/api/get/", (req, res) => {
  res.send("Hello World(*'▽')/api/getからやで");
});

app.use(bodyParser.json()); //必須
app.use(express.urlencoded({ extended: true }));
//post.post();

app.post("/api/post", (req, res) => {
  const data = req.body;
  console.log("req.bodyだよ", data);
  res.send("APIはOkay!!");
  const messageId = data["events"][0]["message"]["id"];
  console.log("画像取得", messageId);
  //res.status(200);
});

//ローカル用サーバ/*
/*app.listen(3000, () => {
  console.log("Application started");
});
*/
process.env.NOW_REGION ? (module.express = app) : app.listen(PORT); //Heroku用

//http://localhost:3000

/*
//ネットにあったPOST
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.status().json({
    message: "Hello!",
  });
});

app.listen(3000, () => console.log("Listening on port 3000..."));
*/

/*
//がいさんのコード
const express = require("express");
const post = require("v1/post");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

post.post();

app.get("/", function (req, res) {
  // res.send('Hello World!');

  // JSON形式でレスポンス返す
  const resData = {
    message: "Hello World2",
  };
  res.json(resData);
});

app.get("/api/get", function (req, res) {
  res.send("api/get: Hello World!");
});

app.post("/api/post", function (req, res) {
  // console.log(req.body);
  const data = req.body;
  const name = data.Name;
  console.log("name", name);
  res.send("api/post: Hello World!");
});

app.listen(3000, function () {});
//(process.env.NOW_REGION) ? module.exports = app : app.listen(PORT); // Vercel用
*/

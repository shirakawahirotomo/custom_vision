const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; //Heroku用
const bodyParser = require("body-parser");
const request = require("request");
const accessToken =
  "2URYJ4A8RIw4FCltZeYploctm4mVqGAlxEnu340WQV+P93maUNOrOaX6EZRvaHLTAUlsPWMqK7aFb6KW1NHSMcWvZbnOgmTUwh/GE+zu62EiEZJ+Tp+NYnhFHkIlR3GRa1x0OwwtUOFd7J3crIwE4wdB04t89/1O/w1cDnyilFU=";

app.use(express.json());
app.use(bodyParser.json()); //必須
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  const data = req.body.events[0].message.id; //.events[0].messages;

  console.log("req.bodyの中身のメッセージID", data);
  res.send("AP:ok");
});
/*
  const options = {
    url: "https://api-data.line.me/v2/bot/message/${req.body.events[0].messages.id}/content",
    method: "get",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
    encoding: null,
  };

  request(options, (error, response, body) => {
    const buffer = new Buffer.from(body);
    console.log(buffer);
    const option = {
      uri:
      method:"post",
      headers:{
        "Content-Type":"application/octet-stream",
        "Prediction-Key":""
      }
  });
});
*/
process.env.NOW_REGION ? (module.express = app) : app.listen(PORT); //Heroku用

//http://localhost:3000

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

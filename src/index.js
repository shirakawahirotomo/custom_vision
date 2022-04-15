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
  //const replyToken = req.body["events"][0]["replyToken"];

  console.log("req.bodyの中身のメッセージID", data);
  res.send("API:ok");

  const options = {
    url: "https://api-data.line.me/v2/bot/message/data/content",
    method: "get",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
    encoding: null,
  };

  request(options, function (error, response, body) {
    const buffer = new Buffer.from(body);
    console.log(buffer); //バイナリデータ
    const option = {
      uri: "https://leadhacktesteastjapan-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/3995706a-5622-438d-afce-71de27a57ca5/classify/iterations/Iteration1/image",
      method: "post",
      headers: {
        "Content-Type": "application/octet-stream",
        "Prediction-Key": "034d56b2970f4167b38c1278b84ecdb7",
      },
      body: buffer,
    };
    console.log("optionの中身", option);

    request.post(option, function (error, res, body) {
      console.log("bodyの中身", body);
      //console.log("replyTokenの中身", replyToken);
      const resBody = JSON.parse(body);
    });
  });
});
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

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const request = require("request");
const accessToken =
  "6yenR51jvKxcZHJ8Wpg6BwVYX5RAFYHr1r29U5urd9J1C10hKgXXbX/ce+v4eXZhu831e6jHVaJzQDfU4VAZVPVOaIWRHWe8NBzFU/0CEWqM+1lKjbfcHwJcuMjDFBFfLX/pwh0/hEPz/HvaaBadSwdB04t89/1O/w1cDnyilFU=";

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

/*
app.get('/api/get', function (req, res) {
 res.json({test:'Hello World!'});
});

app.post('/api/post', function (req, res) {
    console.log(req.body);
    res.json({test:'Hello World!'});
});
*/
app.post("/", function (req, res) {
  // console.log(req.body);
  //const data = req.body;
  //console.log("req.body", data);
  const data = req.body.events[0].message.id;
  res.send("api: OK");
  //const messageId = req.body["events"][0]["message"]["id"];
  //console.log(messageId);

  const options = {
    url: `https://api-data.line.me/v2/bot/message/${data}/content`,
    method: "get",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
    encoding: null,
  };

  request(options, function (error, response, body) {
    //console.log(body);
    const buffer = new Buffer.from(body);
    console.log(buffer);
    const option = {
      uri: "https://leadhack51steastaustralia-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/dbaa10a3-aafd-4b4e-bc20-c43fa94cb4dd/classify/iterations/Iteration1/image",
      method: "post",
      headers: {s
        "Content-Type": "application/octet-stream",
        "Prediction-Key": "77407ee4df894775a208a0a3885fc5d0",
      },
      body: buffer,
    };

    request.post(option, function (error, res, body) {
      //console.log(option);
      console.log(body);
      //const resBody = JSON.parse(body);
    });
  });
});

// app.listen(3000, function () {
// });
process.env.NOW_REGION ? (module.exports = app) : app.listen(PORT); // Heroku
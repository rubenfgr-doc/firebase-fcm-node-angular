var admin = require("firebase-admin");

var serviceAccount = require("./key.json");

var app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// The topic name can be optionally prefixed with "/topics/".
const topic = "highScores";

const message = {
  data: {
    score: "1000",
    time: "2:45",
  },
};

admin
  .messaging(app)
  .subscribeToTopic(
    [
      "d1gQUlXGdJMEWNFYYeGAWp:APA91bHVV6wxapbTbZo6giGFU1JItQOSr9EZu0F8S4Mm2rvnbmcDZSfnMa8W_-M95ThcKNF6gBLAB8-bA-lsG6ZNvQRG5PM7c1TdDgoDE_N4vunbw3_n-ymg7dQAQi7CMkRipR6t21nP",
      "fw5_SQ_abB8wUVLTYE5tbG:APA91bFkCKU3MSgmEYx2qoablP15AEItGpRzxxYGhqQ-SR0GmxQpAJqjs0xU_3YyzFgb90HWJ7g8hawiE1JCFjfC4Xt-5mMhBIoQmXwecjJx8kdTicsAdQWxvczFmzdS50cw4ZV_9Er7",
    ],
    topic
  );

// Send a message to devices subscribed to the provided topic.
admin
  .messaging(app)
  .send({
    token:
      "d1gQUlXGdJMEWNFYYeGAWp:APA91bHVV6wxapbTbZo6giGFU1JItQOSr9EZu0F8S4Mm2rvnbmcDZSfnMa8W_-M95ThcKNF6gBLAB8-bA-lsG6ZNvQRG5PM7c1TdDgoDE_N4vunbw3_n-ymg7dQAQi7CMkRipR6t21nP",
    data: { title: "Título", message: "Mensaje" },
  })
  .then((v) => {
    console.log("Ok", v);
  })
  .catch((err) => {
    console.log("KO", err);
  });

const admin = require("firebase-admin");
const serviceAccount = require("../server/pushnotification-872fa-firebase-adminsdk-fw499-516059c46e.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pushnotification-872fa.firebaseio.com"
});

module.exports = {
  SendPushNotify(token, title, body) {
    var registrationToken = token;

    var payload = {
      notification: {
        title:title,
        body: body
      }
    };

    var options = {
      priority: "high",
      timeToLive: 60 * 60 * 24
    };
    admin
      .messaging()
      .sendToDevice(registrationToken, payload, options)
      .then(function(response) {
        console.log("Successfully sent message: ", response);
      })
      .catch(function(error) {
        console.log("Error sending message: ", error);
      });
  }
};

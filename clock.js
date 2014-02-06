var http = require("http");
var timeInterval = 1000 * 60 * 30;
var siteList = [
  "keytest-node.herokuapp.com"
];

function sitePing() {
  for (var i in siteList) {
    http.get({
      host: siteList[i]
    }, function(res) {
      console.log("Got response: " + res.statusCode);
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });
  }
}

sitePing();
setInterval(sitePing, timeInterval);

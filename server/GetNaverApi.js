var request = require('request');

var client_id = '6HmeeyGn9wj6jkb1N9uV';
var client_secret = 'Nez5KbWj7L';

exports.getShop = function (req, res) {
  var api_url = 'https://openapi.naver.com/v1/search/shop.json?query=' + encodeURI("바지") + '&display=5';
  var options = {
      url: api_url,
      headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });
};
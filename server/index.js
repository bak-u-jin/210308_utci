const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var request = require('request');

const GetNaverApi = require('./modules/GetNaverApi');
const Get_UTCI = require('./modules/GetUTCI');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '1gb', extended: false }));

app.post('/setTime', Get_UTCI.postUTCI);
app.post('/shopping', GetNaverApi.getShop);

app.listen(3002, () => console.log('Server On 3002'));Get_UTCI
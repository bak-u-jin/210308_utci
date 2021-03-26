


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
var request = require('request');

var app = express();

const GetNaverApi = require('./GetNaverApi');
const Get_UTCI = require('./GetUTCI');

app.get('/shopping', GetNaverApi.getShop);




app.listen(3002, () => console.log('Server On 3002'));
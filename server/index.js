const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var request = require('request');

const GetNaverApi = require('./GetNaverApi');
const Get_UTCI = require('./GetUTCI');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '1gb', extended: false }));

let O_apiUrl = new Object();

O_apiUrl.url = 'http://apis.data.go.kr/1360000/AsosHourlyInfoService/getWthrDataList';
O_apiUrl.key = 'xE5NkSveAiECAqJi4BHY11i4OoOfa%2BeT6NzDVUkoYTNzFyIqbOPBU6UbefrbkwGEc3Dd5DvJvB4jHIyE3J5bvg%3D%3D';
O_apiUrl.item = '&dataType=JSON&dataCd=ASOS&dateCd=HR';
O_apiUrl.location = '&stnIds=108';
O_apiUrl.startDate = '&startDt=20210310';
O_apiUrl.endDate = '&endDt=20210310';
O_apiUrl.startTime = '&startHh=01';
O_apiUrl.endTime = '&endHh=01';

O_apiUrl.totalUrl = O_apiUrl.url + '?serviceKey=' + O_apiUrl.key + O_apiUrl.item
										+ O_apiUrl.location
										+ O_apiUrl.startDate + O_apiUrl.endDate
										+ O_apiUrl.startTime + O_apiUrl.endTime;

app.get('/shopping', GetNaverApi.getShop);




app.listen(3002, () => console.log('Server On 3002'));
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
var request = require('request');

var app = express();

let count = 0;
// console.log(yesterday);

const $url = 'http://apis.data.go.kr/1360000/AsosHourlyInfoService/getWthrDataList';
const $KEY = 'xE5NkSveAiECAqJi4BHY11i4OoOfa%2BeT6NzDVUkoYTNzFyIqbOPBU6UbefrbkwGEc3Dd5DvJvB4jHIyE3J5bvg%3D%3D';
const $item = '&dataType=JSON&dataCd=ASOS&dateCd=HR&stnIds=108';
const $startDate = '&startDt=20210310';
const $endDate = '&endDt=20210310';
const $startTime = '&startHh=01';
const $endTime = '&endHh=01';

const $api_url = $url + '?serviceKey=' + $KEY + $item + $startDate +$endDate + $startTime + $endTime;

const uri = 'mongodb://127.0.0.1:27017/utci_db';
var db = mongoose.connect(uri, (err) => {
	if (err) {
		console.log(err.message);
	} else {
    console.log('Succesfully Connected!');
	}
});

var UserSchema = new mongoose.Schema({
	password: {type: 'Number', required: true}, // 비밀번호
	name: String, // 이름
	id: String, // 아이디
});

var Users = mongoose.model('users', UserSchema);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '1gb', extended: false }));

app.get('/', function (req, res) {
	request($api_url, function (error, response, body) {
			// send data to browser
			res.send(body);
	});
});

app.post('/settime', (req, res) => {
	const $url = 'http://apis.data.go.kr/1360000/AsosHourlyInfoService/getWthrDataList';
	const $KEY = 'xE5NkSveAiECAqJi4BHY11i4OoOfa%2BeT6NzDVUkoYTNzFyIqbOPBU6UbefrbkwGEc3Dd5DvJvB4jHIyE3J5bvg%3D%3D';
	const $item = '&dataType=XML&dataCd=ASOS&dateCd=HR&stnIds=108';
	const $startDate = `&startDt=${req.body.Day}`;
	const $endDate = '&endDt=20210310';
	const $startTime = '&startHh=01';
	const $endTime = '&endHh=01';

	const $api_url = $url + '?serviceKey=' + $KEY + $item + $startDate +$endDate + $startTime + $endTime;

	request($api_url, function (error, response, body) {
		// send data to browser
		res.send(body);
	});
	console.log("aa");
});

app.post('/signup', (req, res) => {
	var new_user = new Users(req.body);

	new_user.save((err) => {
		if (err) return res.status(500).json({ message: '저장 실패!' });
		else {
			count++;
			return res.status(200).json({ message: '저장 성공!', data: new_user });
		}
	});
});

app.post('/signin', (req, res) => {
	Users.findOne({ id: req.body.id, password: req.body.password }, (err, user) => {
		if (err) return res.status(500).json({ message: '에러!' });
		else if (user) return res.status(200).json({ message: '유저 찾음!', data: user });
		else {
			count++;
			return res.status(404).json({ message: '유저 없음!' });
		}
	});
});

app.get('/get', (req,res) =>{
	request({url: $api_url}, (error, result) =>{
		const data = JSON.parse(result.body);
		
		const stringfyData = JSON.stringify(data.response.body.pageNo);
		console.log(data.response.body.pageNo);
		console.log(typeof(data.response.body.pageNo));
		res.write(stringfyData);
		res.end();
	})
})

// app.get('/get', (req,res) =>{
// 	request($api_url, function (error, response, body) {
// 		// send data to browser
// 		// console.log("bbbbbbbbbb",body.response.body[0]);
// 		res.write(body);
// 		console.log(;
// 		res.end();
// 	});
//   // res.json({text : $startDate});
// })

app.listen(3002, () => console.log('Server On 3002'));
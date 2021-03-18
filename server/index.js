const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
var request = require('request');

var app = express();

let count = 0;

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
});

app.post('/settime', (req, res) => {
	O_apiUrl.location = `&stnIds=${req.body.location}`;
	O_apiUrl.startDate = `&startDt=${req.body.day}`;
	O_apiUrl.endDate = `&endDt=${req.body.day}`;
	O_apiUrl.startTime = `&startHh=${req.body.time}`;
	O_apiUrl.endTime = `&endHh=${req.body.time}`;
	console.log("aaa",req.body);
	O_apiUrl.totalUrl = O_apiUrl.url + '?serviceKey=' + O_apiUrl.key + O_apiUrl.item
										+ O_apiUrl.location
										+ O_apiUrl.startDate + O_apiUrl.endDate
										+ O_apiUrl.startTime + O_apiUrl.endTime;
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
	request({url: O_apiUrl.totalUrl}, (error, result) =>{
		const data = JSON.parse(result.body);
		
		const stringfyData = JSON.stringify(data.response.body.items.item[0]);
		console.log(data.response.body.items.item[0]);
		res.write(stringfyData);
		res.end();
	})
})

app.listen(3002, () => console.log('Server On 3002'));
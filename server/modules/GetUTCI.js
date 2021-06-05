var request = require('request');

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

var headers = {
	'Accept' : 'application/json'
}

exports.postUTCI = function(req, res) {
	O_apiUrl.location = `&stnIds=${req.body.location}`;
	O_apiUrl.startDate = `&startDt=${req.body.day}`;
	O_apiUrl.endDate = `&endDt=${req.body.day}`;
	O_apiUrl.startTime = `&startHh=${req.body.time}`;
	O_apiUrl.endTime = `&endHh=${req.body.time}`;

	O_apiUrl.totalUrl = O_apiUrl.url + '?serviceKey=' + O_apiUrl.key + O_apiUrl.item
										+ O_apiUrl.location
										+ O_apiUrl.startDate + O_apiUrl.endDate
										+ O_apiUrl.startTime + O_apiUrl.endTime;
										
	request({url: O_apiUrl.totalUrl, headers}, (error, result) =>{
		const data = JSON.parse(result.body);
		const stringfyData = JSON.stringify(data.response.body.items.item[0]);
		res.send(stringfyData);
	})
};
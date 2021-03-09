// const $Json = 'http://apis.data.go.kr/1360000/AsosHourlyInfoService/getWthrDataList?serviceKey=xE5NkSveAiECAqJi4BHY11i4OoOfa%2BeT6NzDVUkoYTNzFyIqbOPBU6UbefrbkwGEc3Dd5DvJvB4jHIyE3J5bvg%3D%3D&pageNo=1&numOfRows=10&dataType=JSON&dataCd=ASOS&dateCd=HR&startDt=20100101&startHh=01&endDt=20100601&endHh=01&stnIds=108';

const $url = 'http://apis.data.go.kr/1360000/AsosHourlyInfoService/getWthrDataList';
const $KEY = 'xE5NkSveAiECAqJi4BHY11i4OoOfa%2BeT6NzDVUkoYTNzFyIqbOPBU6UbefrbkwGEc3Dd5DvJvB4jHIyE3J5bvg%3D%3D';
const $item = '&dataType=JSON&dataCd=ASOS&dateCd=HR&stnIds=108&endDt=20200310&endHh=01&startHh=01&startDt=20190120';

const $api_url = $url + '?serviceKey=' + $KEY + $item;

// 모듈 로드
var parseString = require('xml2js').parseString;
var request = require('request');

// RSS 다운로드 ---- (※1)
request($api_url, function (err, response, body) {
    if (!err && response.statusCode == 200) {
        analyzeRSS(body);
    }
});

// RSS 해석 ---- (※2)
function analyzeRSS(xml) {
    // XML을 JS 오브젝트로 변환
    parseString(xml, function (err, obj) {
        if (err) {
            console.log(err);
            return;
        }
        // 기상 예보 정보 출력 ----- (※3)
        console.log(JSON.stringify(obj)); // ----- (※4)
        // var datas = obj.rss.channel[0].item[0].description[0].body[0].location[0].data;
        // var city = obj.rss.channel[0].item[0].description[0].body[0].location[0].city;
        var yeah = obj.response.body[0].items[0].item;
        for( var i in yeah){
            var yeh = yeah[i];
            console.log(yeh.stnNm);
        }
        // console.log("a "+ " "+yeah);
        // for (var i in datas) {
        //     var data = datas[i];
        //     console.log(city + " " + data.tmEf + " " + data.wf + " " + data.tmn + "~" + data.tmx);
        // }
        // console.log(yeah);
    });
}
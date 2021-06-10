const express = require('express');
const cors = require('cors');

const GetNaverApi = require('./modules/GetNaverApi');
const GetUTCI = require('./modules/GetUTCI');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/setTime', GetUTCI.postUTCI);
app.post('/shopping', GetNaverApi.getShop);

app.listen(3002, () => console.log('Server On 3002'));
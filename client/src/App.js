import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import getDay from './getDay';
import Cal_UTCI from './Cal_UTCI';
import Map from './Map'

function App() {
  
  let yesterday = getDay();

  console.log(yesterday.realDay);
  console.log(yesterday.realTime);


  const [utciArea,setUtciArea] = useState({
    id: 'a',
    password: '123'
  });

  const [content,setContent] = useState(0);
  const [utci,setUTCI] = useState(0);


  const submitReview = () => {
    Axios.post('http://localhost:3002/settime',{
      day: yesterday.realDay,
      time: yesterday.realTime
    }).then(()=>{
      alert('post');
    })

    // Axios.post('http://localhost:3002/signup',{
    //   id:utciArea.id,
    //   password:utciArea.password
    // }).then(()=>{
    //   alert('yeah');
    // })
    // // Axios.get('http://localhost:3002/get',{
    // // }).then((response)=>{
    // //   setContent(response.data);
    // //   console.log(response.data);
    // // })
    Axios.get('http://localhost:3002/get').then(({data})=>{
      setContent(data);
      console.log(data.tm);
      console.log(typeof(data.tm));
    })
  }

  useEffect(()=>{
    setUTCI(Cal_UTCI(content));
  },[content])

  return (
    <div className="App">
      <h1>시간: {content.tm}</h1>
      <h1>장소: {content.stnNm}</h1>
      <h1>기온: {content.ta}</h1>
      <h1>복사온도: {content.ts}</h1>
      <h1>풍속: {content.ws}</h1>
      <h1>습도: {content.hm}</h1>
      <h1>UTCI: {utci}</h1>
      <button onClick={submitReview}>Yeah</button>
      <Map/>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import getDay from './getDay';

function App() {
  
  let yesterday = getDay();

  console.log(yesterday.realDay);
  console.log(yesterday.realTime);


  const [utciArea,setUtciArea] = useState({
    id: 'a',
    password: '123'
  });

  const [content,setContent] = useState(0);


  const submitReview = () => {
    Axios.post('http://localhost:3002/settime',{
      Day: yesterday.realDay,
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
    Axios.get('http://localhost:3002/get').then((response)=>{
      setContent(response);
      console.log(response);
    })
  }

  useEffect(()=>{
    
  },[])

  return (
    <div className="App">
      <h1>{content}</h1>
      <button onClick={submitReview}>Yeah</button>
    </div>
  );
}

export default App;

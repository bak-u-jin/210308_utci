import React, { useState } from 'react';
import Axios from 'axios';

function App() {
  const [utciArea,setUtciArea] = useState({
    id: 'a',
    password: '123'
  });

  const submitReview = () => {
    // Axios.post('http://localhost:3002/signin',{
    //   id:utciArea.id,
    //   password:utciArea.password
    // }).then(()=>{
    //   alert('yeah');
    // })
    Axios.get('http://localhost:3002/get',{
    }).then((response)=>{
      console.log(response.data);
    })
  }

  return (
    <div className="App">
      <button onClick={submitReview}>Yeah</button>
    </div>
  );
}

export default App;

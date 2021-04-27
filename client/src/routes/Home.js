import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';

import { connect } from "react-redux";
import GlobalStyle from '../GlobalStyle';

import getDay from '../components/getDay';
import Cal_UTCI from '../components/Cal_UTCI';
import Map from '../components/Map';
import Emoticon_UTCI from '../components/Emoticon_UTCI';
import HowToUse from '../components/HowToUse';



function Home({store}) {
  let yesterday = getDay();
  const locMain = true;
  
  const [content,setContent] = useState(0);
  const [utci,setUTCI] = useState(0);

  async function submitReview (location){
    Axios.post('http://localhost:3002/setTime',{
      location,
      day: yesterday.realDay,
      time: yesterday.realTime
    }).then(({data})=>{
      setContent(data);
    }).catch(function (error) {
      console.log(error);
    });
  }

  useEffect(()=>{
    setUTCI(Cal_UTCI(content));
  },[content])

  return (
    <D_App className="App">
      <GlobalStyle/>

      <HowToUse/>
      
      <M_main>
        <Map handleMap={store.pathLocation} boxSize={store.boxSize} submitReview={submitReview}/>
        <D_data>
          <D_ImgSize>
            <Emoticon_UTCI utci={utci} location={locMain}/>
          </D_ImgSize>
          <D_dataTitle>
            <Emoticon_UTCI utci={utci} type={true}/>
          </D_dataTitle>
        </D_data>
      </M_main>
    </D_App>
  );
}

const D_App = styled.div`
  padding: 0 10px;
`;

const M_main = styled.div`
  max-width: 1024px;
  margin: 5% auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const D_data = styled.div`
  display: inline-block;
  border-radius: 10px;
  text-align: center;
  background: #defcf9;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  
  width: 120px;
  height: 160px;
  padding: 5px 0;
  font-size: 1rem;
  
  @media only screen and (min-width:720px){
    width: 300px;
    height: 400px;
    padding: 20px 0;
    font-size: 1.4rem;
  }
  `;
  
const D_ImgSize = styled.div`
  height: 100px;
  @media only screen and (min-width:720px){
    height: 280px;
  }
`;
  
const D_dataTitle = styled.div`
  margin-top: 10px;
`;

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps, null)(Home);
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

import {add} from '../components/Store';
import { connect } from "react-redux";
import GlobalStyle from '../GlobalStyle';

import getDay from '../components/getDay';
import Cal_UTCI from '../components/Cal_UTCI';
import Map from '../components/Map';
import Emoticon_UTCI from '../components/Emoticon_UTCI';
import HowToUse from '../components/HowToUse';
import { useCookies } from 'react-cookie';



function Home({toDos, addToDo}) {
  console.log(toDos);
  function clickPlus(){
    console.log(toDos);
    addToDo("1");
  }

  const history = useHistory();
  let yesterday = getDay();
  let location;
  
  const [content,setContent] = useState(0);
  const [utci,setUTCI] = useState(0);
  const [handleMap, setHandleMap] = useState(0);
  const [boxSize, setBoxSize] = useState("0 150 560 700");
  const [cookies, setCookie, removeCookie] = useCookies(['knowToUse']);

  async function submitReview (){
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

  const HandleHover = (num, toMap) =>{
    if(!toMap){
      location = num;
      submitReview();
    }
  }
  
  const HandleClick = (num, toMap, boxSize) =>{
    if(toMap){
      setHandleMap(toMap);
      setBoxSize(boxSize);
    }
    else{
      history.push({
        pathname: "/result",
        state: {
          pathNum : num,
        }
      });
    }
  }

  useEffect(()=>{
    setUTCI(Cal_UTCI(content));
  },[content])

  return (
    <D_App className="App">
      <GlobalStyle/>
      {
        console.log(cookies.knowToUse),
        (cookies.knowToUse !== undefined) ? (
          <></>
          ) : (
          <HowToUse></HowToUse>
        )
      }
      <M_main>
        <Map handleMap={handleMap} boxSize={boxSize} HandleHover={HandleHover} HandleClick={HandleClick}/>
        <D_data>
            <Emoticon_UTCI utci={utci}/>
        </D_data>
      </M_main>
      {}
      <button onClick={clickPlus}>Plus</button>
    </D_App>
  );
}

const D_App = styled.div`
  max-width: 1024px;
  margin: 5% auto;
`;

const M_main = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const D_data = styled.div`
  display: inline-block;
  border-radius: 10px;
  background: #defcf9;
  
  @media only screen and (min-width:720px){
    width: 340px;
    height: 440px;
  }

  @media only screen and (max-width:720px){
    width: 240px;
    height: 300px;
  }
`;

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: text => dispatch(add(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
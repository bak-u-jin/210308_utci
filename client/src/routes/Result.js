import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {useLocation} from "react-router-dom";
import Axios from 'axios';

import GlobalStyle from '../GlobalStyle';

import Cal_UTCI from '../components/Cal_UTCI';
import getDay from '../components/getDay';
import Emoticon_UTCI from '../components/Emoticon_UTCI';
import MoreShop from '../components/MoreShop';

function Result(){
  
  if(useLocation().state === undefined)
    window.location.replace("/");
    
  const location = useLocation().state.pathNum;

  const [utci, setUTCI] = useState("Loading");
  const [content, setContent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [shopMain, setShopMain] = useState(0);

  let yesterday = getDay();

  function getContent (){
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

  function getShop(utci){
    Axios.post('http://localhost:3002/shopping',{
      utci
    }).then(
      ({data}) =>{
        setShopMain(data.items);
        setIsLoading(false);
    }).catch(function (error){
      console.log(error);
    })
  }

  useEffect(()=>{
    getContent();
  }, []);

  useEffect(()=>{
    if(utci == "Loading", content != 0)
      setUTCI(Cal_UTCI(content));
  },[content]);

  useEffect(()=>{
    if(shopMain == 0 && utci != "Loading")
      getShop(utci);
  }, [utci]);

  return(
    <D_App>
      <GlobalStyle/>
      {
        isLoading ? (
          <h4>Loading...</h4>
        ) : (
          <>
            <D_result>
              <D_dataModal>
                <p>
                  시간: {content.tm}
                </p>
                <p>
                  장소: {content.stnNm}
                </p>
                <p>
                  기온: {content.ta}
                </p>
                <p>
                  복사온도: {content.ts}
                </p>
                <p>
                  풍속: {content.ws}
                </p>
                <p>
                  습도: {content.hm}
                </p>
                <p>
                  UTCI: {utci}
                </p>
              </D_dataModal>
            
              <Emoticon_UTCI utci={utci}/>
            </D_result>

            <D_shop>
              {
                shopMain.map((itemNum) => 
                React.createElement(
                  "img",{
                    src: itemNum.image,
                    height: "140px",
                    style: {
                      display: "flex",
                      alignItems: "center"
                    }
                  }
                ))
              }
            </D_shop>

            <MoreShop utci={utci}/>
          </>
        )
      }
    </D_App>
  )
}

const D_App = styled.div`
  max-width: 1024px;
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const D_result = styled.div`
  position: relative;
  width:100%;
  height:700px;
`;

const D_dataModal = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 10px;
  background: #defcf9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  @media only screen and (min-width:720px){
    width: 210px;
    height: 200px;
  }

  @media only screen and (max-width:720px){
    width: 240px;
    height: 340px;
  }

  p{
    margin:2px 0;
  }
`;

const D_shop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  *{
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;

export default Result;
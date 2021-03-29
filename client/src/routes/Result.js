import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {useLocation} from "react-router-dom";
import Axios from 'axios';

import GlobalStyle from '../GlobalStyle';

import Cal_UTCI from '../components/Cal_UTCI';
import getDay from '../components/getDay';
import Emoticon_UTCI from '../components/Emoticon_UTCI';

function Result(){
  
  if(useLocation().state === undefined)
    window.location.replace("/");
    
  const location = useLocation().state.pathNum;

  const [content,setContent] = useState(0);
  const [utci,setUTCI] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [shopItems, setShopItems] = useState(0);

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

  async function getShop(utci){
    await Axios.post('http://localhost:3002/shopping',{
      utci
    }).then(
      ({data}) =>{
        setShopItems(data.items);
    }).catch(function (error){
      console.log(error);
    })

    setIsLoading(false);
  }

  useEffect(()=>{
    getContent();
  }, []);

  useEffect(()=>{
    setUTCI(Cal_UTCI(content));
  },[content]);
  
  useEffect(()=>{
    getShop(utci);
  },[utci]);

  return(
    <D_App>
      <GlobalStyle/>
      {
        isLoading ? (
          <h4>Loading...</h4>
        ) : (
          <>
              <D_data>
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
              </D_data>
            <D_result>
              <Emoticon_UTCI utci={utci}/>
            </D_result>

            <D_shop>
              {
                shopItems.map((itemNum) => 
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
          </>
        )
      }
    </D_App>
  )
}

const D_App = styled.div`
  max-width: 1280px;
  align-items: center;
  margin: 5%;
  `;
  
  const D_data = styled.div`
  position: absolute;
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

const D_result = styled.div`
  height:700px;
`;

const D_shop = styled.div`
  display: flex;
  justify-content: space-between;

  *{
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    
  }
`;

export default Result;
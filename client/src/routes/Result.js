import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {useLocation} from "react-router-dom";
import Axios from 'axios';

import GlobalStyle from '../GlobalStyle';

import Cal_UTCI from '../components/Cal_UTCI';
import getDay from '../components/getDay';
import EmoticonUTCI from '../components/Emoticon_UTCI';
import MoreShop from '../components/MoreShop';
import DataModal from '../components/DataModal';
import Loading from '../components/Loading';
import Error from '../components/Error';

function Result(){
  if(useLocation().state === undefined)
    window.location.replace("/");
    
  const location = useLocation().state.pathNum;

  const [utci, setUTCI] = useState(false);
  const [content, setContent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [shopMain, setShopMain] = useState(0);
  const [isError, setIsError] = useState(false);

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
      setIsError(true);
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
      if(utci === false && content !== 0)
      setUTCI(Cal_UTCI(content));
    },[content]);
    
    useEffect(()=>{
      if(shopMain === 0 && utci)
        getShop(utci);
    }, [utci]);
    
    return(
      <D_app>
      <GlobalStyle/>
      {
        isLoading ? (
          <>
            {isError ? (
              <Error/>
              ):(
              <Loading/>
            )}
          </>
        ) : (
          <>
            <D_result>
              <D_codi>
                <EmoticonUTCI utci={utci}/>
              </D_codi>
              <DataModal
                time={yesterday.realTime}
                content = {content}
                utci = {utci}
              />
            </D_result>

            <D_moreTitle>
              <D_mainTitle>Main Item</D_mainTitle>
              <D_subTitle>오늘의 메인 아이템!</D_subTitle>
            </D_moreTitle>
            <D_shop>
              {console.log(shopMain)}
              {shopMain.map((itemNum) => 
                React.createElement(
                  "a",{
                    key: itemNum.title,
                    href: itemNum.link,
                    target: "_blank"
                  },
                  <I_item src={itemNum.image}/>,
                  <D_title>
                    {itemNum.title}<br/>
                    <strong>{itemNum.lprice}</strong>원
                  </D_title>
              ))}
            </D_shop>
            <D_moreTitle>
              <D_mainTitle>Sub Item</D_mainTitle>
              <D_subTitle>메인 아이템과 어울리는 아이템!</D_subTitle>
            </D_moreTitle>
            <MoreShop utci={utci}/>
          </>
        )
      }
    </D_app>
  )
}

const D_app = styled.div`
  max-width: 1024px;
  height:100%;
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
`;

const D_result = styled.div`
  position: relative;
  width:100%;
  height: 530px;

  @media only screen and (min-width:720px){
    height:600px;
  }
`;

const D_codi = styled.div`
  position:absolute;
  top: 30px;
  height: 50vw;
  min-height: 200px;
  z-index: 1;

  @media only screen and (min-width:720px){
    height: 400px;
  }
`;

const D_shop = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  height: 30vw;
  max-height: 150px;
  justify-content: space-around;

  a {
    width:30%;
  }

  a:nth-child(3) ~ *{
      display: none;
  }

  @media only screen and (min-width:720px){
    a{
      width: 18%;
    }

    a:nth-child(3) ~ *{
      display:block;
    }
  }
`;

const I_item = styled.img`
  display: block;
  margin: 0 auto;
  height: 80%;
  max-height: 120px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const D_title= styled.div`
  margin: 2px auto 0 auto;
  width:60%;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; 
`;

const D_moreTitle = styled.div`
  text-align: center;
`;

const D_mainTitle = styled.div`
  margin-top: 30px;
  font-size: 30px;
  font-weight: bold;
`;

const D_subTitle = styled.div`
  font-size: 12px;
  color: #999;
`;

export default Result;
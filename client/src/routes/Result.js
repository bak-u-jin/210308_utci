import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {useLocation} from "react-router-dom";
import Axios from 'axios';

import GlobalStyle from '../GlobalStyle';

import CalUTCI from '../components/CalUTCI';
import getDay from '../components/getDay';
import EmoticonUTCI from '../components/EmoticonUTCI';
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
      setUTCI(CalUTCI(content));
    },[content]);
    
    useEffect(()=>{
      if(shopMain === 0 && utci)
        getShop(utci);
    }, [utci]);
    
    return(
      <ResultContain>
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
            <ResultBox>
              <CodiBox>
                <EmoticonUTCI utci={utci}/>
              </CodiBox>
              <DataModal
                time={yesterday.realTime}
                content = {content}
                utci = {utci}
              />
            </ResultBox>

            <MoreTitleBox>
              <MainTitle>Main Item</MainTitle>
              <SubTitle>오늘의 메인 아이템!</SubTitle>
            </MoreTitleBox>
            <ShopBox>
              {shopMain.map((itemNum) => 
                React.createElement(
                  "a",{
                    key: itemNum.title,
                    href: itemNum.link,
                    target: "_blank"
                  },
                  <ItemImg src={itemNum.image}/>,
                  <TitleBox>
                    {itemNum.title}<br/>
                    <strong>{itemNum.lprice}</strong>원
                  </TitleBox>
              ))}
            </ShopBox>
            <MoreTitleBox>
              <MainTitle>Sub Item</MainTitle>
              <SubTitle>메인 아이템과 어울리는 아이템!</SubTitle>
            </MoreTitleBox>
            <MoreShop utci={utci}/>
          </>
        )
      }
    </ResultContain>
  )
}

const ResultContain = styled.div`
  max-width: 1024px;
  height:100%;
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
`;

const ResultBox = styled.div`
  position: relative;
  width:100%;
  height: 530px;

  @media only screen and (min-width:720px){
    height:600px;
  }
`;

const CodiBox = styled.div`
  position:absolute;
  top: 30px;
  height: 50vw;
  min-height: 200px;
  z-index: 1;

  @media only screen and (min-width:720px){
    height: 400px;
  }
`;

const ShopBox = styled.div`
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

const ItemImg = styled.img`
  display: block;
  margin: 0 auto;
  height: 80%;
  max-height: 120px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const TitleBox = styled.div`
  margin: 2px auto 0 auto;
  width:60%;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; 
`;

const MoreTitleBox = styled.div`
  text-align: center;
`;

const MainTitle = styled.div`
  margin-top: 30px;
  font-size: 30px;
  font-weight: bold;
`;

const SubTitle = styled.div`
  font-size: 12px;
  color: #999;
`;

export default Result;
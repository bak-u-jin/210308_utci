import React from 'react';
import styled from 'styled-components';
import sleeveless from '../img/sleeveless.png';
import shortSleeve from '../img/shortSleeve.jpg';
import longSleeve from '../img/longSleeve.jpg';
import gardigan from '../img/gardigan.jpg';
import sweatshirt from '../img/sweatshirt.jpg';
import jacket from '../img/jacket.jpg';
import coat from '../img/coat.jpg';
import longPadding from '../img/longPadding.jpg';

function EmoticonUTCI({ utci, type }){
  if(utci > 38){
    if(type)
      return <Pcontent utci={utci}>죽을 더위에요...</Pcontent>
    else
      return <Iheight src={sleeveless} alt="slightCold"></Iheight>
  }
  else if(utci>32){
    if(type)
      return <Pcontent utci={utci}>엄청 더워요!</Pcontent>
    else
      return <Iheight src={sleeveless} alt="slightCold"></Iheight>
  }
  else if(utci>26){
    if(type)
      return <Pcontent utci={utci}>많이 더워요!</Pcontent>
    else
      return <Iheight src={shortSleeve} alt="slightCold"></Iheight>
    }
  else if(utci>9){
    if(type)
      return <Pcontent utci={utci}>쫌 더워요!</Pcontent>
    else
      return <Iheight src={shortSleeve} alt="slightCold"></Iheight>
  }
  else if(utci>0){
    if(type)
      return <Pcontent utci={utci}>따뜻해요~!</Pcontent>
    else
      return <Iheight src={longSleeve} alt="gardigan"></Iheight>
  }
  else if(utci>-13){
    if(type)
      return <Pcontent utci={utci}>살짝 추워요!</Pcontent>
    else
      return <Iheight src={sweatshirt} alt="slightCold"></Iheight>
  }
  else if(utci>-27){
    if(type)
      return <Pcontent utci={utci}>좀 추워요!</Pcontent>
    else
      return<Iheight src={gardigan} alt="moderateCold"></Iheight>
  }
  else if(utci>-40){
    if(type)
      return <Pcontent utci={utci}>많이 추워요!</Pcontent>
    else
      return<Iheight src={jacket} alt="strongCold"></Iheight>
  }
  else if(utci>-80){
    if(type)
      return <Pcontent utci={utci}>엄청 추워요!</Pcontent>
    else
      return<Iheight src={coat} alt="veryStrongCold"></Iheight>
  }
  else if(utci>-120){
    if(type)
      return <Pcontent utci={utci}>죽을 추위에요...</Pcontent>
    else
      return<Iheight src={longPadding} alt="noStress"></Iheight>
  }
  else
    return null;
}

const Iheight = styled.img`
  height: 100%;
  background: #eee;
  border-radius: 10px;
`;

const Pcontent = styled.p`

`;

export default EmoticonUTCI;
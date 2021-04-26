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

function Emoticon_UTCI({utci, type, locMain}){
  if(utci > 38){
    if(type)
      return <P_content utci={utci}>죽을 더위에요...</P_content>
    else
      return <I_height src={sleeveless} alt="slightCold"></I_height>
  }
  else if(utci>32){
    if(type)
      return <P_content utci={utci}>엄청 더워요!</P_content>
    else
      return <I_height src={sleeveless} alt="slightCold"></I_height>
  }
  else if(utci>26){
    if(type)
      return <P_content utci={utci}>많이 더워요!</P_content>
    else
      return <I_height src={shortSleeve} alt="slightCold"></I_height>
    }
  else if(utci>9){
    if(type)
      return <P_content utci={utci}>쫌 더워요!</P_content>
    else
      return <I_height src={shortSleeve} alt="slightCold"></I_height>
  }
  else if(utci>0){
    if(type)
      return <P_content utci={utci}>따뜻해요~!</P_content>
    else
      return <I_height src={longSleeve} alt="gardigan"></I_height>
  }
  else if(utci>-13){
    if(type)
      return <P_content utci={utci}>살짝 추워요!</P_content>
    else
      return <I_height src={sweatshirt} alt="slightCold"></I_height>
  }
  else if(utci>-27){
    if(type)
      return <P_content utci={utci}>좀 추워요!</P_content>
    else
      return<I_height src={gardigan} alt="moderateCold"></I_height>
  }
  else if(utci>-40){
    if(type)
      return <P_content utci={utci}>많이 추워요!</P_content>
    else
      return<I_height src={jacket} alt="strongCold"></I_height>
  }
  else if(utci>-80){
    if(type)
      return <P_content utci={utci}>엄청 추워요!</P_content>
    else
      return<I_height src={coat} alt="veryStrongCold"></I_height>
  }
  else if(utci>-120){
    if(type)
      return <P_content utci={utci}>죽을 추위에요...</P_content>
    else
      return<I_height src={longPadding} alt="noStress"></I_height>
  }
  else
    return null;
}

const I_height = styled.img`
  height: 100%;
  background: #eee;
  border-radius: 10px;
`;

const P_content = styled.p`

`;

export default Emoticon_UTCI;
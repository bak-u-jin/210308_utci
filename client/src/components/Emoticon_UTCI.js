import React from 'react';
import styled from 'styled-components';
import rabbitNoStress from '../img/rabbitNoStress.png';
import noStressGardigan from '../img/nostress-gardigan.png';


function Emoticon_UTCI({utci, type}){
  if(utci > 46){
    if(type)
      return (<p_content utci={utci}>죽을 더위에요...</p_content>);
    else
      return <I_height src={noStressGardigan} alt="slightCold"></I_height>
  }
  else if(utci>38){
    if(type)
      return (<p_content utci={utci}>엄청 더워요!</p_content>);
    else
      return <I_height src={noStressGardigan} alt="slightCold"></I_height>
  }
  else if(utci>32){
    if(type)
      return (<p_content utci={utci}>많이 더워요!</p_content>);
    else
      return <I_height src={noStressGardigan} alt="slightCold"></I_height>
    }
  else if(utci>26){
    if(type)
      return (<p_content utci={utci}>쫌 더워요!</p_content>);
    else
      return <I_height src={noStressGardigan} alt="slightCold"></I_height>
  }
  else if(utci>9){
    if(type)
      return (<p_content utci={utci}>따뜻해요~!</p_content>);
    else
      return (<I_height src={noStressGardigan} alt="noStress"></I_height>);
  }
  else if(utci>0){
    if(type)
      return (<p_content utci={utci}>살짝 추워요!</p_content>);
    else
      return(<I_height src={noStressGardigan} alt="noStress"></I_height>);
  }
  else if(utci>-13){
    if(type)
      return (<p_content utci={utci}>좀 추워요!</p_content>);
    else
      return(<I_height src={noStressGardigan} alt="noStress"></I_height>);
  }
  else if(utci>-27){
    if(type)
      return (<p_content utci={utci}>많이 추워요!</p_content>);
    else
      return(<I_height src={noStressGardigan} alt="noStress"></I_height>);
  }
  else if(utci>-40){
    if(type)
      return (<p_content utci={utci}>엄청 추워요!</p_content>);
    else
      return(<I_height src={noStressGardigan} alt="noStress"></I_height>)
  }
  else if(utci>-80){
    if(type)
      return (<p_content utci={utci}>죽을 추위에요...</p_content>);
    else
      return(<I_height src={noStressGardigan} alt="noStress"></I_height>)
  }
  else
    return null;
}

const I_height = styled.img`
  height: 400px;
  background: #eee;
  border-radius: 10px;
`;

const p_content = styled.p`

`;

export default Emoticon_UTCI;
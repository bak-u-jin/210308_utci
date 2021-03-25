import React from 'react';
import styled from 'styled-components';
import rabbitNoStress from '../img/rabbitNoStress.png';
import rabbitSlightCold from '../img/rabbitSlightCold.jpg';


function Emoticon_UTCI({utci}){
  if(utci > 46)
    return (<p>exHeat</p>);
  else if(utci>38)
    return (<p>veryStHeat</p>);
  else if(utci>32)
    return (<p>stHeat</p>);
  else if(utci>26)
    return (<p>moderHeat</p>);
  else if(utci>9)
    return (
      <>
      <D_Img>
        <I_height src={rabbitNoStress} alt="noStress"></I_height>
      </D_Img>
      <p>noStress</p>
      </>
      );
  else if(utci>0)
    return (
      <>
      <D_Img>
        <I_height src={rabbitSlightCold} alt="slightCold"></I_height>
      </D_Img>
      <p>slightCold</p>
      </>
      );
  else if(utci>-13)
    return (<p>moderCold</p>);
  else if(utci>27)
    return (<p>stCold</p>);
  else if(utci>-40)
    return (<p>veryStCold</p>);
  else
    return (
      <>
        <D_Img>
          <I_height></I_height>
        </D_Img>
        <p>exCold</p>
      </>
      );
}

const D_Img = styled.div`
  width:100%;  
  height:60%;
  max-height: 60%;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const I_height = styled.img`
  width: 100%;
`;

export default Emoticon_UTCI;
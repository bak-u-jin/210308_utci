import React from 'react';
import styled from 'styled-components';
import rabbitNoStress from '../img/rabbitNoStress.png';
import noStressGardigan from '../img/nostress-gardigan.png';


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
        <I_height src={noStressGardigan} alt="noStress"></I_height>
        <p>noStress</p>
      </D_Img>
      </>
      );
  else if(utci>0)
    return (
      <>
        <D_Img>
          <I_height src={noStressGardigan} alt="slightCold"></I_height>
          <p>slightCold</p>
        </D_Img>
      </>
    );
  else if(utci>-13)
    return (<p>moderCold</p>);
  else if(utci>27)
    return (<p>stCold</p>);
  else if(utci>-40)
    return (<p>veryStCold</p>);
  else if(utci>-80)
    return (
      <>
        <D_Img>
          <I_height></I_height>
          <p>exCold</p>
        </D_Img>
      </>
    );
  else
    return(null);
}

const D_Img = styled.div`
  width:100%;  
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;
  
  const I_height = styled.img`
  height: 80%;
  background: #eee;
  border-radius: 10px;
`;

export default Emoticon_UTCI;
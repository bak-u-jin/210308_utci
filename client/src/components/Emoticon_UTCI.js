import React from 'react';
import styled from 'styled-components';
import rabbitNoStress from '../img/rabbitNoStress.png';
import noStressGardigan from '../img/nostress-gardigan.png';


function Emoticon_UTCI({utci}){
  if(utci > 46)
    return (<p>죽을 더위에요...</p>);
  else if(utci>38)
    return (<p>엄청 더워요!</p>);
  else if(utci>32)
    return (<p>많이 더워요!</p>);
  else if(utci>26)
    return (<p>쫌 더워요!</p>);
  else if(utci>9)
    return (
      <>
      <D_Img>
        {/* <p>따뜻해요~!</p> */}
        <I_height src={noStressGardigan} alt="noStress"></I_height>
      </D_Img>
      </>
      );
  else if(utci>0)
    return (
      <>
        <D_Img>
          {/* <p>살짝 추워요!</p> */}
          <I_height src={noStressGardigan} alt="slightCold"></I_height>
        </D_Img>
      </>
    );
  else if(utci>-13)
    return (<p>좀 추워요!</p>);
  else if(utci>27)
    return (<p>많이 추워요!</p>);
  else if(utci>-40)
    return (<p>엄청 추워요!</p>);
  else if(utci>-80)
    return (
      <>
        <D_Img>
          {/* <p>죽을 추위에요...</p> */}
          <I_height></I_height>
        </D_Img>
      </>
    );
  else
    return(null);
}

const D_Img = styled.div`
  position:absolute;
  right:160px;
  bottom: 20px;
  `;
  
  const I_height = styled.img`
  height: 400px;
  background: #eee;
  border-radius: 10px;
`;

export default Emoticon_UTCI;
import React, { useEffect, useState } from 'react';
import styled, {css, keyframes} from 'styled-components';
import { IoIosArrowDown } from "react-icons/io";


function MoreShop() {
  const [moreToggle,setMoreToggle] = useState(false);
  
  function handleToggle(){
    setMoreToggle(!moreToggle);
  }

  return(
    <>
      {moreToggle ? (
          <>
          </>
        ) : (
          <>
          </>
        )
      }
      
      <D_dummy id="dummy" moreToggle={moreToggle}/>
      <D_moreBar moreToggle={moreToggle}>
        <IoIosArrowDown size="30px" onClick={handleToggle}/>
      </D_moreBar>
    </>
  )
}

// async function getShop(utci){
//   await Axios.post('http://localhost:3002/shopping',{
//     utci
//   }).then(
//     ({data}) =>{
//       setShopItems(data.items);
//   }).catch(function (error){
//     console.log(error);
//   })

//   setIsLoading(false);
// }

// {
//   shopItems.map((itemNum) => 
//   React.createElement(
//     "img",{
//       src: itemNum.image,
//       height: "140px",
//       style: {
//         display: "flex",
//         alignItems: "center"
//       }
//     }
//   ))
// }


const unfoldIn = keyframes`
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
`;

const D_dummy = styled.div`
  width:100%;  
  height:800px;
  margin-top: 20px;
  background: #a8d8ea;
  display: none;
  transform-origin: top;
  
  ${props =>
    (props.moreToggle == true) &&
    css `
    display: block;
    animation: ${unfoldIn} 1.4s;
    `
  }
`;


const D_moreBar = styled.div`
  margin-top: 20px;
  text-align: center;
  transition: 0.4s;

  ${props =>
    (props.moreToggle == true) &&
    css`
      transform: rotate(180deg);
    `
  }
`;

export default MoreShop;
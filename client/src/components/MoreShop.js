import React, { useEffect, useReducer, useState } from 'react';
import styled, {css, keyframes} from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import Axios from 'axios';
import { IoIosArrowDown } from "react-icons/io";

const category = [{
    id: 1,
    item:"top"
  },
  {
    id: 2,
    item:"bottom"
  },
  {
    id: 3,
    item:"shoes"
  }]

  const nullShopItems ={
    top: [],
    bottom: [],
    shoes: [],
  }

  function putShopItem(state, action){
    switch(action.type){
      case "top":{
        return {...state, top: action.items}
      }

      case "bottom":{
        return {...state, bottom: action.items}
      }

      case "shoes":{
        return {...state, shoes: action.items}
      }
    }
  }

function MoreShop({utci}) {
  const [moreToggle,setMoreToggle] = useState(false);
  const [shopItem, setShopItem] = useReducer(putShopItem, nullShopItems)
  
  function handleToggle(){
    setMoreToggle(!moreToggle);
  }
  
  async function getShop(utci, category){
    console.log("utci=",utci);
    console.log("category=",category.item);
    await Axios.post('http://localhost:3002/shopping',{
      utci,
      category : category.id
    }).then(({data}) =>{
      setShopItem({type: `${category.item}`, items: data.items});
      console.log("data.items",data.items);
      console.log("data.items",category.item);
      console.log("shopItem",shopItem);
    }).catch(function (error){
      console.log(error);
    })
  }

  useEffect(() => {
    for(let i=0; i<3; i++)
      getShop(utci, category[i]);
  },[])

  return(
    <>
      <GlobalStyle/>
        {
          moreToggle ? 
          (
            <D_MoreArea moreToggle={moreToggle}>
              <D_category>상의</D_category>
              <D_shop>
                {shopItem.top.map((itemNum) => 
                  React.createElement(
                    "a",{
                      href: itemNum.link,
                      target: "_blank"
                    },
                    <I_item
                      src={itemNum.image}
                    />,
                    <D_title>
                      {itemNum.title}<br/>
                      <strong>{itemNum.lprice}</strong>원
                    </D_title>
                ))}
              </D_shop>
              
              <D_category>하의</D_category>
              <D_shop>
                  {shopItem.bottom.map((itemNum) => 
                    React.createElement(
                      "a",{
                        href: itemNum.link,
                        target: "_blank"
                      },
                      <I_item
                        src={itemNum.image}
                      />,
                      <D_title>
                        {itemNum.title}<br/>
                        <strong>{itemNum.lprice}</strong>원
                      </D_title>
                  ))}
              </D_shop>
              
              <D_category>신발</D_category>
              <D_shop>
                  {shopItem.shoes.map((itemNum) => 
                    React.createElement(
                      "a",{
                        href: itemNum.link,
                        target: "_blank"
                      },
                      <I_item
                        src={itemNum.image}
                      />,
                      <D_title>
                        <p>{itemNum.title}  </p>
                        <strong>{itemNum.lprice}</strong>원
                      </D_title>
                  ))}
              </D_shop>
            </D_MoreArea>
          ):(<></>)
        }
      <H_moreLine/>
      <D_moreBar moreToggle={moreToggle}>
        <IoIosArrowDown size="30px" onClick={handleToggle}/>
      </D_moreBar>
    </>
  )
}

const unfoldIn = keyframes`
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
`;

const D_MoreArea = styled.div`
  width:100%;  
  border-radius: 10px;
  // margin-top: 20px;
  padding-bottom: 20px;
  display: none;
  transform-origin: top;
  translate:2s;
  
  ${props =>
    (props.moreToggle == true) &&
    css `
    display: block;
    animation: ${unfoldIn} 1.4s;
    `
  }
`;

const D_category = styled.div`
  margin: 60px 0 30px 0px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

const D_shop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  a {
    width: 20%;
  }
`;

const I_item = styled.img`
  display: block;
  margin: 0 auto;
  height: 140px;
  display: 'flex';
  alignItems: 'center';
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

const H_moreLine = styled.hr`
  margin-top:30px;
  width: 100%;
  border: none;
  border-top: 2px dashed #666;
`;

const D_moreBar = styled.div`
  text-align: center;
  transition: 0.4s;
  background: white;
  width:40px;
  margin:0 auto;
  background: rgb(255, 255, 255);
  margin-top: -16px;

  ${props =>
    (props.moreToggle == true) &&
    css`
      transform: rotate(180deg);
      margin-top: -20px;
    `
  }
`;



export default MoreShop;
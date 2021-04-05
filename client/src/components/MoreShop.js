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
      <D_dummy id="dummy" moreToggle={moreToggle}>
        {
          moreToggle ? 
          (
            <>
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
                        {itemNum.title}<br/>
                        <strong>{itemNum.lprice}</strong>원
                      </D_title>
                  ))}
              </D_shop>
            </>
          ):(<></>)
        }
      </D_dummy>
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

const D_dummy = styled.div`
  width:100%;  
  border-radius: 10px;
  margin-top: 20px;
  padding-bottom: 20px;
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

const D_category = styled.div`
  margin: 12px 0 8px 30px;
  font-size: 1.1rem;
  font-weight: 600;
`;

const D_shop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  a {
    width: 20%;
    text-align: center;
  }
`;

const D_title= styled.div`
  margin: 2px auto 0 auto;
  width:60%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; 
  text-align: center;
`;

const I_item = styled.img`
  height: 140px;
  display: 'flex';
  alignItems: 'center';
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const D_moreBar = styled.div`
  margin: 20px;
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
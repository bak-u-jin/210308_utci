import React from 'react';
import styled from 'styled-components';


function ShopTitle({utci}){
  if(utci > 46)
    return (<D_category>exHeat</D_category>);
  else if(utci>38)
    return (<D_category>veryStHeat</D_category>);
  else if(utci>32)
    return (<D_category>stHeat</D_category>);
  else if(utci>26)
    return (<D_category>moderHeat</D_category>);
  else if(utci>9)
    return (<D_category>셔츠</D_category>);
  else if(utci>0)
    return (<D_category>가디건</D_category>);
  else if(utci>-13)
    return (<D_category>moderCold</D_category>);
  else if(utci>27)
    return (<D_category>stCold</D_category>);
  else if(utci>-40)
    return (<D_category>veryStCold</D_category>);
  else if(utci>-80)
    return (<D_category>exCold</D_category>);
  else
    return(null);
}

const D_category = styled.div`
  margin: 40px 0 30px 0;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;


export default ShopTitle;
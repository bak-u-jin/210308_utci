import React from 'react';
import styled from 'styled-components';


function ShopTitle({utci}){
  if(utci > 46)
    return (<D_Category>exHeat</D_Category>);
  else if(utci>38)
    return (<D_Category>veryStHeat</D_Category>);
  else if(utci>32)
    return (<D_Category>stHeat</D_Category>);
  else if(utci>26)
    return (<D_Category>moderHeat</D_Category>);
  else if(utci>9)
    return (<D_Category>셔츠</D_Category>);
  else if(utci>0)
    return (<D_Category><strong>가디건</strong> -----------------------------------------------------------------------------------------------------------------------------------</D_Category>);
  else if(utci>-13)
    return (<D_Category>moderCold</D_Category>);
  else if(utci>27)
    return (<D_Category>stCold</D_Category>);
  else if(utci>-40)
    return (<D_Category>veryStCold</D_Category>);
  else if(utci>-80)
    return (<D_Category>exCold</D_Category>);
  else
    return(null);
}

const D_Category = styled.div`
  width: 100%;
  font-size: 1.1rem;
  margin-left: 30px;
  // font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
`;


export default ShopTitle;
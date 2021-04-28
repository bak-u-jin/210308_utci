import React from 'react';
import styled from 'styled-components';
import Country from '../paths/Country';
import Gangwondo from '../paths/Gangwondo';
import Geyoungi from '../paths/Geyonggi';
import NorthJeolla from '../paths/NorthJeolla';
import SouthJeolla from '../paths/SouthJeolla';
import NorthChungcheong from '../paths/NorthChungcheong';
import SouthChungCheong from '../paths/SouthChungCheong';
import SouthGyeongsang from '../paths/SouthGyeongsang';
import NorthGyeongsang from '../paths/NorthGyeongsang';

import { useHistory } from "react-router-dom";

import {changeMap} from './Store';
import { connect } from 'react-redux';

function Map({changePath, handleMap, boxSize, submitReview}){
	const history = useHistory();

	let timer;
	const locationCity = [Country, Geyoungi, Gangwondo, SouthChungCheong, NorthChungcheong, SouthJeolla, NorthJeolla, SouthGyeongsang, NorthGyeongsang];
	
	function HandleClick (num, toMap, boxSize){
		if(toMap){
			changePath(toMap, boxSize);
		}
		else{
			history.push({
				pathname: "/result",
				state: {
					pathNum : num,
				}
			});
		}
	}

	function HandleHover (num, toMap){
    if(!toMap){
      submitReview(num);
    }
  }

	return(
		<S_styled id="svgMap" xmlns="http://www.w3.org/2000/svg" viewBox={boxSize}>
			{locationCity[handleMap].map(pathNum => React.createElement(
				"path",{
					key: pathNum.key,
					id: pathNum.key,
					d: pathNum.path,
					className: pathNum.class,
					onMouseEnter: (() =>{
						if(pathNum.num || pathNum.toMap)
							document.getElementById(`${pathNum.key}`).classList.add('mouseEnter');
						
						timer = setTimeout(()=>
							HandleHover(pathNum.num,  pathNum.toMap), 1000
						)}),
						onMouseLeave: (() =>{
							clearTimeout(timer);
							document.getElementById(`${pathNum.key}`).classList.remove('mouseEnter');
						}),
						onClick: (() =>{
							if(pathNum.num || pathNum.toMap)
								HandleClick(pathNum.num, pathNum.toMap, pathNum.boxSize);
							clearTimeout(timer);
					})
				}
			))}
		</S_styled>
	)
}


const S_styled = styled.svg`
	width: 60%;
	height: 60%;
	path{
		fill: #CCCCCC;
		fill-opacity: 1;
		stroke:white;
		stroke-opacity: 1;
		stroke-width:0.5;		
	}

	.mouseEnter{
		fill: #aa96da;
	}
`;

function mapStateToProps(state) {
  return { store: state };
}

function mapDispatchToProps(dispatch) {
  return {
    changePath: (toMap, boxSize) => dispatch(changeMap({toMap, boxSize})),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
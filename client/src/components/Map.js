import React from 'react';
import styled from 'styled-components';
import Country from '../paths/Country';
import DaeJeon from '../paths/DaeJeon';
import Gangwondo from '../paths/Gangwondo';
import Geyoungi from '../paths/Geyonggi';
import NorthJeolla from '../paths/NorthJeolla';
import SouthJeolla from '../paths/SouthJeolla';
import SouthChungCheong from '../paths/SouthChungCheong';
import SouthGyeongsang from '../paths/SouthGyeongsang';
import NorthGyeongsang from '../paths/NorthGyeongsang';

function Map({handleMap, boxSize, HandleHover, HandleClick}){
	let timer;
	const locationCity = [Country, Geyoungi, Gangwondo, SouthChungCheong, DaeJeon, NorthJeolla, SouthJeolla, SouthGyeongsang, NorthGyeongsang];

	return(
		<ASVG id="svgMap" xmlns="http://www.w3.org/2000/svg" width="40%" height="40%" viewBox={boxSize} styleMore="2">
			{locationCity[handleMap].map(pathNum => React.createElement(
				"path",{
					id: pathNum.id,
					d: pathNum.path,
					onMouseEnter: (() =>{
						if(pathNum.num){
							document.getElementById(`${pathNum.id}`).classList.add('mouseEnter');
						}
						timer = setTimeout(
							()=>HandleHover(pathNum.num,  pathNum.toMap), 1000
						);
					}),
					onMouseLeave: (() =>{
						clearTimeout(timer);
						document.getElementById(`${pathNum.id}`).classList.remove('mouseEnter');
					}),
					onClick: (() =>{
						HandleClick(pathNum.num, pathNum.toMap, pathNum.boxSize);
					})
				}
			))}
		</ASVG>
	)
}

const ASVG = styled.svg`
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




export default Map;
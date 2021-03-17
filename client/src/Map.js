import React, { useEffect } from 'react';
import styled from 'styled-components';
import pathMap from './PathMap';

function Map({HandleHover}){
	useEffect(()=>{
	},[]);

	return(
		<ASVG id="svgMap" xmlns="http://www.w3.org/2000/svg" width="40%" height="40%" viewBox="0 100 550 700">
			{pathMap.map(pathNum => React.createElement(
				"path",{
					className: pathNum.id,
					d: pathNum.path,
					onMouseOver: (() => HandleHover(pathNum.key))
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
		transform: scaleX(1);

		&:hover {
			fill: #aa96da;
		}
	}
`;

export default Map;


	// const urlW3 = "http://www.w3.org/2000/svg";

	// function handleHover(index){
	// 	let createBigPath = document.createElementNS(urlW3, "path");
	// 	const svgMap = document.getElementById('svgMap');

	// 	createBigPath.setAttribute('id','hoverSvg');
	// 	createBigPath.setAttribute('title',`${pathMap[index].id}`);
	// 	// createBigPath.setAttribute('class',`land`);
	// 	createBigPath.setAttribute('d',`${pathMap[index].path}`);
	// 	createBigPath.setAttribute('style',`fill: #000; transform: scale(1.05); transform-origin: ${pathMap[index].transXY};`);
		
	// 	createBigPath.onmouseout = function() {
	// 		while( document.getElementById('hoverSvg') !== null)
	// 		svgMap.removeChild(document.getElementById(`hoverSvg`));
	// 	}
		
	// 	setTimeout(() => {
	// 		if( document.getElementById('hoverSvg') !== null)
	// 			svgMap.removeChild(document.getElementById(`hoverSvg`));
	// 	}, 1500);

	// 	svgMap.appendChild(createBigPath);
	// }

	// onMouseOver: () => {
					// 	handleHover(pathNum.num)
					// }
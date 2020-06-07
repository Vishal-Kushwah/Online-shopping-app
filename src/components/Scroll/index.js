import React from 'react';

const Scroll = (props) =>{
	return(
		<div style={{overflow: 'auto', height: "720px"}}>
			{props.children}
		</div>
		);
}

export default Scroll;
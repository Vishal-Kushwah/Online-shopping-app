import React from 'react';
import './style3.css';

const Descriptions = ({children, onhandleChange, productDetails}) => {
	return(
		<div>
			<div className="grid-container3" style={{marginTop:'100px', marginBottom:'0px'}} >
				<div className="specs1" style={{cursor:'pointer'}} onClick={()=>onhandleChange('false')} >
					Specification
				</div>	
				<div className="description1" style={{cursor:'pointer'}} >
					{children}
				</div>
			</div>
			<div className="des">
				{productDetails.productDescription}
			</div>
		</div>
	);
}
export default Descriptions;
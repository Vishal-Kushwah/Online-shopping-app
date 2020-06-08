import React from 'react';
import './style3.css';





const Specifications=({productDetails, children, onhandleChange})=>{
	console.log(onhandleChange);
	return(
		<div>
			<div className="grid-container3" style={{marginTop:'100px', marginBottom:'0px'}} >
				<div className="specs" style={{cursor:'pointer'}}>
					{children}
				</div>
				<div className="description" style={{cursor:'pointer'}} onClick={ () => onhandleChange('true')} >Description</div>	
			</div>
			<div className="grid-container3">

				<div className="specsname">
					<div className='boxsp'>
						OS
					</div>
				</div>
				<div className="specsdetail">
					<div className='boxdt'>
						{productDetails.productSpecification.OS}
					</div>
				</div>	
				<div className="specsname">
					<div className='boxsp'>
						RAM
					</div>
				</div>
				<div className="specsdetail">
					<div className='boxdt'>
						{productDetails.productSpecification.RAM}
					</div>
				</div>	
				<div className="specsname">
					<div className='boxsp'>
						Item Weight
					</div>
				</div>
				<div className="specsdetail">
					<div className='boxdt'>
						{productDetails.productSpecification['Item Weight']}
					</div>
				</div>	
				<div className="specsname">
					<div className='boxsp'>
						Product Dimensions
					</div>
				</div>
				<div className="specsdetail">
					<div className='boxdt'>
						{productDetails.productSpecification['Product Dimensions']}
					</div>
				</div>	
				<div className="specsname">
					<div className='boxsp'>
						Camera
					</div>
				</div>
				<div className="specsdetail">
					<div className='boxdt'>
						{productDetails.productSpecification['Other camera features']}
					</div>
				</div>	
				<div className="specsname">
					<div className='boxsp'>
						Batteries
					</div>
				</div>
				<div className="specsdetail">
					<div className='boxdt'>
						{productDetails.productSpecification.Batteries}
					</div>
				</div>	
				<div className="specsname">
					<div className='boxsp'>
						Wireless Communication
					</div>
				</div>
				<div className="specsdetail">
					<div className='boxdt'>
						{productDetails.productSpecification['Wireless communication technologies']}
					</div>
				</div>	
				<div className="specsname">
					<div className='boxsp'>
						Connectivity Technologies
					</div>
				</div>
				<div className="specsdetail">
					<div className='boxdt'>
						{productDetails.productSpecification['Connectivity technologies']}
					</div>
				</div>	
				<div className="specsname">
					<div className='boxsp'style={{color:'#0F5EEA'}} >
						See more
					</div>
				</div>
			</div>
		</div>
	);

}
export default Specifications;
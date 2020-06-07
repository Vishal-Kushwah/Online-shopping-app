import React from 'react';
import Logo from '../img/E-Commerce-Logo-1@2x.png';
import './style.css';

const Home = ({onRouteChange}) => {
	return(
		<div>
			<img src={Logo} plt="logo"/>
			<a> Details</a>
			<a className="Box" style={{marginTop:"400px", cursor:'pointer'}} onClick={ () => onRouteChange('ProductDetail')}> Product Detail</a>
			<a className="Box" style={{marginTop:"50px", cursor:'pointer'}} onClick={ () => onRouteChange('Seller')} > Seller</a>
		</div>
			
	);
}


export default Home;
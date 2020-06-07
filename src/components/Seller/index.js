import React from 'react';
import Scroll from "../Scroll";
import './style.css';

class Seller extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			sellers: []

		}
	}
	componentDidMount () {
		fetch('http://35.225.50.138:9091/otherSellers?productId=9&variantId=6')
			.then(response => response.json())
			.then(json => this.setState({sellers: json.otherSellerList}));
			
	}
	render(){
		const { sellers } = this.state;
		console.log(sellers[0]);
		return(
			<div>
				<div className="body1">
					<div className="header">
						<div>
							<img className="logo" src={require('../img/E-Commerce-Logo-1.png')} alt="Logo"/>
						</div>
						<div className="headerMenu">
							<img className="pin" src={require('../img/pin.svg')} alt="pin"/>
							Banglore
							<div>Become Seller</div>
							<div >Login</div>
							<button className="button">Signup</button>
						</div>
					</div>
				</div>
				<Scroll>
					<div className="body2">
						<div className="header">
							<div style={{cursor:'pointer', opacity: "0.44"}} onClick={ () => this.props.onRouteChange('ProductDetail')}>&lt; Return to product
							</div>
							<div className="headerMenu">
								<img className="phoneicon" src={require('../img/Bitmap.png')} alt="item" />
								
								OnePlus 7 Pro (Almond, 8 GB RAM, 128 GB)
							</div>
						</div>
					</div>
					<div className="body3">
						<div className="header">
							<p>Seller Information</p>
							<p>Price & Offers</p>
						</div>
					</div>
					<div >
						
						{
							sellers.map( (seller, i) => {
								return(
									<div key={i} className="body4">
										<div className="header">
											<div style={{ padding:"20px 0px"}}>
												<a ><img style={{height: "300px", width: "300px", padding: "0px 35px" }} src={sellers[i].sellerDetails.sellerResources[0].resourceURL} alt='image'/></a>
												<div style={{display: "block", padding:"15px"}} >
														<h5>{sellers[i].sellerDetails.name} </h5>
														<h5>{sellers[i].sellerDetails.address}</h5>
														<h5>{sellers[i].sellerDetails.area} </h5>
														<h5>{sellers[i].sellerDetails.city} </h5>
														<h5>{sellers[i].sellerDetails.pincode} </h5>
														<h5>{sellers[i].sellerDetails.contact} </h5>
												</div>
											</div>
											<div className="price" style={{display:"flex",  padding:"140px 0px" }}>
												
													
												<h3>Rs. {sellers[i].elocalsPrice}</h3>
												<h4 className="lnth">Rs. {sellers[i].mrp}</h4>
												<h4 style={{color:"#FF601E", padding: "0px 15px"}} >30% Off</h4>
											</div>
										</div>
										
									</div>
								);
							})
						}
					</div>
					<div >
						{
							sellers.map( (seller, i) => {
								return(
									<div key={i} className="body4">
										<div className="header">
											<div style={{ padding:"20px 0px"}}>
												<a ><img style={{height: "300px", width: "300px", padding: "0px 35px" }} src={sellers[i].sellerDetails.sellerResources[0].resourceURL} alt='image'/></a>
												<div style={{display: "block", padding:"15px"}} >
														<h5>{sellers[i].sellerDetails.name} </h5>
														<h5>{sellers[i].sellerDetails.address}</h5>
														<h5>{sellers[i].sellerDetails.area} </h5>
														<h5>{sellers[i].sellerDetails.city} </h5>
														<h5>{sellers[i].sellerDetails.pincode} </h5>
														<h5>{sellers[i].sellerDetails.contact} </h5>
												</div>
											</div>
											<div className="price" style={{display:"flex",  padding:"140px 0px" }}>
												
													
												<h3>Rs. {sellers[i].elocalsPrice}</h3>
												<h4 className="lnth">Rs. {sellers[i].mrp}</h4>
												<h4 style={{color:"#FF601E", padding: "0px 15px"}} >30% Off</h4>
											</div>
										</div>
										
									</div>
								);
							})
						}
					</div>
				</Scroll>
				<nav className="navbottom">
					<button className="button" style={{padding: "3px 25px"}} >
						<img style={{padding: "20px 5px"}}  src={require('../img/instant book.svg')} alt=""/>
						<hr2 style={{padding: "20px 5px"}} >Buy Now</hr2>
					</button>
					<div className="button2" style={{padding: "3px 25px"}}>
						<img style={{padding: "2px 5px"}}  src={require('../img/cart.svg')} alt=""/>
						<hr2 style={{color:"blue", margin: "20px 5px"}} >Add to Cart</hr2>
					</div>
					<div style={{display:"flex"}}>
						<img style={{padding: "0px 0px 0px 10px"}}  src={require('../img/pickup.svg')} alt=""/>
						<hr2 style={{color:"blue", padding: "20px 5px"}} >Pickup from store</hr2>
					</div>
					<div style={{display:"flex"}} >
						<img style={{border: "none",padding: "0px 0px 0px 10px"}}  src={require('../img/Calendar delivery.svg')} alt=""/>
						<hr2 style={{color:"blue", padding: "20px 5px"}} >Calendar delivery</hr2>
					</div>
				</nav>
			</div>
		);
	}
}

export default Seller;
import React, { useState } from 'react';
import { ReactComponent as ProfileIcon } from '../img/profile.svg';
import { ReactComponent as Signout } from '../img/signout.svg';
import { ReactComponent as Order } from '../img/order.svg';
import './style3.css';
import Scroll from '../Scroll';


class ProductDetail extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			productDetails: [],
			load: false,
			describe: false
		}
	}
	componentDidMount () {
		fetch('http://35.225.50.138:9091/productDetail?sellerId=12&productId=9&variantId=6')
			.then(res => res.json())
			.then(json => this.setState({productDetails:json.productDetail,
										load: true}));
			
	}
	onhandleChange = (describ) => {
		this.setState({describe: describ});
	}

	render(){
		const { productDetails, load, onhandleChange, describe } = this.state;
		if(!load){
			return <div> Loading</div>;
		}

		console.log(describe);
		return(
			<div >
				<div  className="mainbody1">
					<div className="header1">
						<div>
							<img style={{marginLeft:"20px "}} src={require('../img/E-Commerce-Logo-1.png')} alt="Logo"/>
						</div>
						<div className="headerMenu1" style={{margin:"0px 50px 0px 100px"}}>
							<div> 
								<img style={{paddingRight:"5px"}}src={require('../img/pin.svg')} alt="pin"/>
								Banglore
							</div>
							<div ><img src={require('../img/shopping_bag.svg')} alt="bag"/></div>
			
							<div>
								<Profile icon={<ProfileIcon/>}>
									<DropdownMenu name={'Profile'} icon={<ProfileIcon/>}/>
									<DropdownMenu name={'Orders'} icon={<Order/>}/>
									<DropdownMenu name={'Signout'} icon={<Signout/>}/>
								</Profile>
							</div>
			 			</div>
					</div>
				</div>
				<Scroll>
					<div className="header1" style={{marginLeft: "20px",opacity: "0.65"}} >

							<div style={{margin:"20px 20px",cursor:'pointer'}} onClick={ () => this.props.onRouteChange('Home')}> Home &gt; Mobile &gt;</div>
						<div className="headerMenu1">
							<div style={{marginRight:"50px"}}>
								<input style={{margin:"5px"}} type="checkbox" id="myCheck" value="Add to Cart"/>
								Add to Cart
							</div>
						</div>
					</div>
					<div className="grid-container">
						<div className="item-1">
							<img style={{height:"27px", width:"24px"}} src={require('../img/share.svg')} alt="share"/>
							<img style={{height:"27px", width:"24px"}} src={require('../img/wishlist.svg')} alt="share"/>
						</div>
						<div className="item-name">
							{productDetails.productName}
						</div>
						<div className="item-img">
							<img src={productDetails.productResources[0].resourceURL} alt="img"/>
						</div>
						<div className="item-icon">{
							productDetails.productResources.map((icon,i)=>(
								<img style={{height: '1fr', weight:"1fr", padding:"10px"}} key={i} src={productDetails.productResources[i].resourceURL} alt="img"/>
							))
							}
							<a style={{background:"silver",fontSize:"16px", padding:'30px',margin:"5px 9px"}}>
								5 + more
							</a>
						</div>
						<div className="item-details">
							
								{
								productDetails.productKeyFeatures.map((ft,i)=>(
									<ul key={i}>
										<li>{productDetails.productKeyFeatures[i]}</li>
									</ul>
									))
								}
						</div>
						<div className="variant-items"> 
							<div style={{display:'flex',alignItems:'center',width:'20%',height:'20%', padding:'2px', marginTop:'1px'}}>Color
							{
								productDetails.variants[0].variantResourcesSet.map((vr,i)=>(
									
									<img key={i} style={{marginLeft:"15px ",height:'1fr',width:'1fr',padding:"30px"}} src={productDetails.variants[0].variantResourcesSet[i].resourceURL} alt="img"/>
									
								))
								}
								<label style={{marginLeft:"25px", display: 'flex'}}>Quantity
									<select style={{marginLeft:'5px'}} >
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
								</label>
							</div>
						</div>
						<div className="item-price">
							<div  style={{fontSize:"34px",fontWeight:'bold'}}>
								₹{productDetails.variants[0].elocalsPrice}
							</div>
							<div  style={{margin:"1px 5px",opacity: '0.34',textDecoration:"line-through"}}>
								₹{productDetails.variants[0].mrp}
							</div>
							<div  style={{color: '#FF601E'}}>
								30% Off
							</div>	
						</div>
						<div className="item-taxes" style={{color:' #0F5EEA', fontSize:'16px'}} >
							Inclusive of all taxes
						</div>
						<div className="del-options">
							<div className="box-or">
								Delievery
							</div>
							<div className="box-or">
								EMI options available
							</div>
							<div className="box-or">
								Pay later
							</div>
						</div>
						<div className="item-nav">
							<button className="button" style={{display:'flex', padding: "3px 25px"}} >
								<img style={{padding: "20px 5px"}}  src={require('../img/instant book.svg')} alt=""/>
								<hr2 style={{padding: "20px 5px"}} >Buy Now</hr2>
							</button>
							<div className="button2" style={{padding: "3px 25px",display:'flex'}}>
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
						</div>
					</div>
					<div className="seller-Menu">
						<div className="Seller" >
							<div className="sellerRaj">
								<div>
									<img style={{marginLeft:'10px'}} src={require('../img/store-1.png')} alt="store"/>
								</div>
								<div style={{margin:'10px 10px'}}>
									<div style={{opacity:"0.54"}} >
										Seller
									</div>
									<div>
										{productDetails.sellerName}
									</div>
								</div>
							</div>
						</div>
						<div className="moresellers">
							<div style={{display:'flex', marginTop:'5px',cursor:'pointer'}} onClick={ () => this.props.onRouteChange('Seller')} >View more sellers
								<img className="sellerimg" src={require('../img/Seller.svg')} alt='png'/>
							</div>
						</div>
						<div className="shipping">
							<div>
								<img style={{marginLeft:'5px'}} src={require('../img/group-26@3x.png')} alt="store"/>
							</div>
							<div style={{margin:'10px 10px'}}>
								<div style={{opacity:"0.54"}} >
									Shipping fee
								</div>
								<div style={{fontWeight:'bold'}}>
									Free
								</div>
							</div>
						</div>
						<div className="bestpr">
							<div>
								<img style={{marginLeft:'5px'}} src={require('../img/group-27@3xxx.png')} alt="store"/>
							</div>
							<div style={{margin:'10px 10px'}}>
								<div style={{opacity:"0.54"}} >
									Best Price
								</div>
								<div style={{fontWeight:'bold'}}>
									Always
								</div>
							</div>
						</div>
						<div className="pickup">
							<div>
								<img style={{marginLeft:'5px'}} src={require('../img/group-21@3x.png')} alt="store"/>
							</div>
							<div style={{margin:'10px 10px'}}>
								<div style={{opacity:"0.54"}} >
									Pickup Service
								</div>
								<div style={{fontWeight:'bold'}}>
									One Hour
								</div>
							</div>
						</div>
						<div className="request">
							<div>
								<img style={{marginLeft:'5px'}} src={require('../img/group-28@3x.png')} alt="store"/>
							</div>
							<div style={{margin:'10px 10px'}}>
								<div style={{opacity:"0.54"}} >
									Request your product
								</div>
								<div style={{fontWeight:'bold'}}>
									Get Anythng
								</div>
							</div>
						</div>
						
					</div>
					{
						describe===false				
						?<Specifications onhandleChange={onhandleChange} productDetails={productDetails}>Specifications</Specifications>
						:<Descriptions onhandleChange={onhandleChange} productDetails={productDetails}>Description</Descriptions>

					}
					<div className="reviews">
						<div style={{fontSize:'28px', fontWeight:'bolder'}}>24 Reviews</div>
						<div className="rating">
							<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
						</div>
					</div>
					<div className='review'>
						<div className="circle">R</div>
						<div >
							The product just received today. The item sold by Supercomnet says 10 day replacement. But after delivery the return option is withdrawn from details of order and says if any problem arises contact local Apple service centre. It is a clear fraud for the customers who buy such a high priced handset. Customer be careful about that. My set is running fine but it is not my question.Why an online store like Flipkart close the option of return without informing the customer?
							<div style={{display:'flex', justifyContent:'space-between',marginTop:'15px', opacity:'0.84' }} >
								<div>
									Rahit Rastogi
								</div>
								<div>
									a week ago
								</div>

							</div>
						</div>
					</div>

					<div className='review'>
						<div className="circle">S</div>
						<div >
							Phone is good and excellent but price is so high😭😭
							<div style={{display:'flex', justifyContent:'space-between',marginTop:'15px', opacity:'0.84' }} >
								<div>
									Sourabh Saxena
								</div>
								<div>
									a month ago
								</div>
							</div>
						</div>
					</div>
					<div className='boxsp'style={{color:'#0F5EEA'}} >
								See more
					</div>
				<div className='boxsp'style={{opacity: '0.74'}} >
					Similar products
				</div>
				<div className="grid-container4">
					<div className='card'>
						<div style={{margin:'10px 10px'}}>
							<img src={require('../img/51xngnPYqFL._SL1000_.png')} alt='img'/>
						</div>
						<div style={{margin:'10px 10px'}}>OnePlus 7 Pro (Almond, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 4000mAH Battery)</div>
						<div style={{margin:'10px 10px'}}>₹23500</div>
						<div style={{margin:'10px 10px'}}>
							<div style={{opacity:"0.54"}} >
								Seller
							</div>
							<div>
								{productDetails.sellerName}
							</div>
						</div>
					</div>
					<div className='card'>
						<div style={{margin:'10px 10px'}}>
							<img src={require('../img/61P6u9SWzRL._SX569_ (1).png')} alt='img'/>
						</div>
						<div style={{margin:'10px 10px'}}>OnePlus 7 Pro (Almond, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 4000mAH Battery)</div>
						<div style={{margin:'10px 10px'}}>₹22097</div>
						<div style={{margin:'10px 10px'}}>
							<div style={{opacity:"0.54"}} >
								Seller
							</div>
							<div>
								Ravi Telecom
							</div>
						</div>
					</div>
					<div className='card'>
						<div style={{margin:'10px 10px'}}>
							<img src={require('../img/612byLIR+gL._SX679_.png')} alt='img'/>
						</div>
						<div style={{margin:'10px 10px'}}>OnePlus 7 Pro (Almond, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 4000mAH Battery)</div>
						<div style={{margin:'10px 10px'}}>₹22000</div>
						<div style={{margin:'10px 10px'}}>
							<div style={{opacity:"0.54"}} >
								Seller
							</div>
							<div>
								Sanjeev Moto
							</div>
						</div>
					</div>
					<div className='card'>
						<div style={{margin:'10px 10px'}}>
							<img src={require('../img/51s0Mb5li8L._SX679_.png')} alt='img'/>
						</div>
						<div style={{margin:'10px 10px'}}>OnePlus 7 Pro (Almond, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 4000mAH Battery)</div>
						<div style={{margin:'10px 10px'}}>₹23200</div>
						<div style={{margin:'10px 10px'}}>
							<div style={{opacity:"0.54"}} >
								Seller
							</div>
							<div>
								Lucky Yo
							</div>
						</div>
					</div>
				</div>
				<div className="grid-container5">
					<div className="lookingfor">
						Counldn't found what are you looking for?
					</div>
					<div className="iconsf">
						<img src={require('../img/icon.svg')} alt='img'/>
						<img src={require('../img/monitor.svg')} alt='img'/>
						<img src={require('../img/laptop.svg')} alt='img'/>
						<img src={require('../img/armchair.svg')} alt='img'/>
						<img src={require('../img/microwave.svg')} alt='img'/>
					</div>
					<button className='rqstbt'>
						Request product
					</button>
				</div>
				<div className="grid-container5" style={{background:'white'}}>
					<div className="lookingfor" style={{color:'black',fontSize:'36px'}}>
						Any questions in mind ?
					</div>
					<div className="lookingfor" style={{marginTop:"90px",color: 'black',fontSize:"20px"}} >
						Click here for quick support
					</div>
					<div className="iconsf" style={{marginTop:'50px'}}>
						<img src={require('../img/whatsapp.svg')} alt='img'/>
					</div>
				</div>
				<div className="grid-container5" style={{background:'white'}}>
					<div className="cities">
						<img src={require('../img/3.png')} alt='img'/>
						<div style={{fontWeight:'bolder',fontSize:'28px', margin:'20px'}}>Cities we are in</div>
					</div>
					<div className="followus">
						<div style={{fontWeight:'bolder'}} > Follow Us</div>
						<div style={{marginRight:'10px'}} >We are driven by the excitement of building technologies, inventing products, and providing services that change our local shopping experience.</div>
						<div style={{display:'flex', justifyContent:'space-between'}}>
							<img src={require('../img/facebook.svg')} alt='img'/>
							<img src={require('../img/twitter.svg')} alt='img'/>
							<img src={require('../img/Instagram.svg')} alt='img'/>
							<img src={require('../img/youtube.svg')} alt='img'/>
							<img src={require('../img/linkedin.svg')} alt='img'/>
							<img src={require('../img/tumblr.svg')} alt='img'/>
							<img src={require('../img/google-my-business.svg')} alt='img'/>
						</div>
					</div>
					<div className="followus">
						<div style={{fontWeight:'bolder'}} > Contact Us</div>
						<div style={{padding:'auto 20px auto 0px'}}>Location: Pune, Maharashtra </div>
						<div style={{padding:'auto 20px auto 0px'}}>Phone: +91 7004831994 </div>
						<div style={{padding:'auto 20px auto 0px'}}>Email: digitalservices@elocals.in</div>
					</div>
					<div className="cities">
						<img src={require('../img/Group 10181.svg')} alt='img'/>
					</div>
					<div className="followus2">
						<div className="grid-new">	
							<div style={{margin:'0px 10px'}}>
								<div style={{fontWeight:'bolder',padding:'10px 0px'}} >Useful Links</div>
								<div style={{padding:'10px 0px'}}>About us</div>
								<div style={{padding:'10px 0px'}}>Contact us</div>
								<div style={{padding:'10px 0px'}}>Sitemap</div>
							</div>
							<div style={{margin:'0px 10px'}}>
								<div style={{fontWeight:'bolder',padding:'10px 0px'}} >Services</div>
								<div style={{padding:'10px 0px'}}>Payment</div>
								<div style={{padding:'10px 0px'}}>Shipping</div>
								<div style={{padding:'10px 0px'}}>Cancellation</div>
							</div>
						</div>
					</div>
					<div style={{margin:'0px 10px',textAlign:'left'}}>
						<div style={{fontWeight:'bolder',padding:'10px 0px'}} >Information</div>
						<div style={{padding:'10px 0px'}}>FAQ</div>
						<div style={{padding:'10px 0px'}}>Privacy Policy</div>
						<div style={{padding:'10px 0px'}}>Terms & Conditions</div>
					</div>
				</div>
				<div className="feedback"><img  src={require('../img/Feedback.svg')} alt="feedback"/></div>
				<div style={{display:'flex',justifyContent:'flex-end',paddingRight:'20px'}}>
					<div className="bottom">© Locals Digital Services Pvt. Ltd. | ALL RIGHTS RESERVED</div>
					<div className="bottomicon"style={{display:'flex'}} >
						<img style={{padding:'0px 20px',display:'flex'}} src={require('../img/Western-union.svg')} alt='img'/>
						<img style={{display:'flex',padding:'0 20px'}} src={require('../img/Group 19.svg')} alt='img'/>
						<img style={{display:'flex',padding:'0 20px'}} src={require('../img/Paypal.svg')} alt='img'/>
						<img style={{display:'flex',padding:'0 20px'}} src={require('../img/Group 12475.svg')} alt='img'/>
					</div>
				</div>
				</Scroll>
			</div>
		);
	}
}

function Profile(props) {
	var [open , setOpen] = useState(false);
	console.log(props);
	return(
		<li className="nav-items" onClick={()=> setOpen(!open)}>
			<a href="#" className='Prof-icon' onClick={()=> setOpen(!open)}>
				{<ProfileIcon/>}
			</a>
			<a>{open && props.children}</a>
		</li>
	);
}


function DropdownMenu(props){
	function DropdownItem(props) {
		console.log(props);
		return (
			<a href="#" className="menu-item" >
				<span className="icon-button">{props.leftIcon}</span>
				<span className="icon-name"> {props.Name}</span>
			</a>
		);
	}
	return(
		<div className="dropdown">
			<DropdownItem leftIcon={props.icon}/>
			<DropdownItem Name={props.name}/>
		</div>
	);
}

function Specifications({productDetails, children, onhandleChange}){
	console.log(productDetails);
	return(
		<div>
			<div className="grid-container3" style={{marginTop:'100px', marginBottom:'0px'}} >
				<div className="specs" style={{cursor:'pointer'}}>
					{children}
				</div>
				<div className="description" style={{cursor:'pointer'}} >Description</div>	
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

function Descriptions({children, onhandleChange, productDetails}){
	return(
		<div>
			<div className="grid-container3" style={{marginTop:'100px', marginBottom:'0px'}} >
				<div className="specs1" style={{cursor:'pointer'}} onClick={()=>onhandleChange(true)} >Specification</div>	
				<div className="description1" style={{cursor:'pointer'}} onClick={()=>onhandleChange(true)}  >
					{children}
				</div>
			</div>
			<div className="des">
				{productDetails.productDescription}
			</div>
			
		</div>
	);
}

export default ProductDetail;
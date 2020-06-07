import React from 'react';
import './App.css';
import Home from './components/Home';
import Seller from './components/Seller';
import ProductDetail from './components/ProductDetail';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			route:'Home'
		}
	}
	onRouteChange = (route)=>{
		this.setState({route: route});
	}
	render(){
	  return (
	    <div className="App">
	    	{
	    		this.state.route==='Home'
	    		?<Home onRouteChange={this.onRouteChange}/>
	    		:this.state.route==='Seller'
	    		?<Seller onRouteChange={this.onRouteChange}/>
	    		:<ProductDetail onRouteChange={this.onRouteChange}/>
	    	}
	    </div>
	  );
	}
} 

export default App;

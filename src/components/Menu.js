import React from 'react';
import logo from '../logo.png';
import './Menu.css';

class Menu extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: this.props.user["name"]
		}
	}

	render(){
	return (
		<div className="ma4 mt0" style={{display: 'flex', justifyContent: 'flex-start'}}>
				<div className="Tilt-inner pa3"> 
	          		<img style= {{paddingTop: '20px'}} src={logo} className="App-logo" alt="logo" /> 
					<h1 className="App-title">Shop</h1>
				</div>
		{ this.state.name === "administrator"
		?(
			<div className="bar" style={{width:'100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around'}}>
			<p 
				onClick={() => this.props.onMenuChange('Update_products')}
				className='f3 link dim black underline pa3 pointer'>Update products</p>
			<p 
				onClick={() => this.props.onMenuChange('New_product')}
				className='f3 link dim black underline pa3 pointer'>New product</p>
			<p 
				onClick={() => this.props.onMenuChange('Update_discount')}
				className='f3 link dim black underline pa3 pointer'>Update discount</p>
			<p 
				onClick={() => this.props.onMenuChange('New_discount')}
				className='f3 link dim black underline pa3 pointer'>New discount</p>
			</div>
		)
		:
		(
			<div className="bar" style={{width:'100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around'}}>
			<p 
				onClick={() => this.props.onMenuChange('shop')}
				className='f3 link dim black underline pa3 pointer'>Shop</p>
			<p 
				onClick={() => this.props.onMenuChange('cart')}
				className='f3 link dim black underline pa3 pointer'>Cart</p>
			<p
				onClick={() => this.props.onMenuChange('user')}
				className='f3 link dim black underline pa3 pointer'>User</p>
			</div>
		)
		}
		</div>
		);
}
}

export default Menu;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestProducts } from '../actions';

import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';

import Navigation from '../components/Navigation';
import Menu from '../components/Menu';
import SignIn from '../components/SignIn';
import Register from '../components/Register';
import User from '../components/User';

import './App.css';

const mapStateToProps = (state) => {
	return {
		searchField: state.searchProducts.searchField,
		products: state.requestProducts.products, 
		isPending: state.requestProducts.isPending,
		error: state.requestProducts.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch (setSearchField(event.target.value)),
		onRequestProducts: () => dispatch(requestProducts())
	}
}

const initialState= {
	option:'shop',
	route: 'signin',
	isSignedIn:false,
	user: {
		id: '',
		name: '',
		password: '',
		email: '',
		address: '',
		joined: ''
	}
}

class App extends Component { 
	constructor (){
    super();
    this.state={
		option:'shop',
		route: 'signin',
		isSignedIn:false,
		user: {
			id: '',
			name: '',
			password: '',
			email: '',
			address: '',
			joined: ''
			}
		}
	}

	componentDidMount (){
		this.props.onRequestProducts()
		this.loadUser(this.state.user)
		console.log(this.props.products)
	}

	loadUser = (data) => {
		this.setState({user: {
			id: data.id,
			name: data.name,
			password: data.password,
			email: data.email,
			address: data.address,
			joined: data.joined
			}})
	}

	onRouteChange= (route) => {
		if (route === 'signout'){
			this.setState(initialState)
			this.setState({option: 'shop'})
		}else if (route === 'home'){
			this.setState({isSignedIn: true})
		}
		this.setState({route: route});
		this.componentDidMount()
	}

	onMenuChange= (option) => {
		this.componentDidMount()
		this.setState({option: option})
	}

	onProfileGet = ()  => {
		fetch(`http://localhost:3000/profile/${this.state.user["id"]}`, {
			method: 'get',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify()
		})
		.then(response => response.json())
		.then(user => {
			if(user["id"]) {
				this.loadUser(user);
			}
		})
	}

	render() {
		const { searchField, onSearchChange, products, isPending } = this.props;
		const filteredProducts = products.filter(product => {
			return product.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return isPending ? 
			<h1>Loading</h1>
			:(
				<div className="App">
					<Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
					{ this.state.route === 'home'
						? 
							(<div>
								<Menu 
									onMenuChange={this.onMenuChange}
									user={this.state.user}/>
									{this.state.option === 'shop'
										?(<div>
											<SearchBox SearchChange={onSearchChange}/>
											<Scroll>
												<ErrorBoundry>
													<CardList products={filteredProducts} />
												</ErrorBoundry>
											</Scroll>
										</div>)
										:
											(this.state.option === 'user'
												?
													<User 
														user={this.state.user}
														loadUser={this.loadUser}
														onRouteChange={this.onRouteChange} 
														onMenuChange={this.onMenuChange}/>
												:
												<div> Error </div>
											)
									}
							</div>)
						:(
							this.state.route === 'signin'
								? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
								: <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
						)
					}
				</div>
			);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

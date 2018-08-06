import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestProducts } from '../actions';

import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';

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

class App extends Component { 
	componentDidMount (){
		this.props.onRequestProducts()
		console.log(this.props.products)
	}

	render() {
		const { searchField, onSearchChange, products, isPending } = this.props;
		const filteredProducts = products.filter(product => {
			return product.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return isPending ? 
			<h1>Loading</h1>
			:(
				<div>
					<div className="App-title">
					<h1>Grocery</h1>
				</div>
					<SearchBox SearchChange={onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
							<CardList products={filteredProducts} />
						</ErrorBoundry>
					</Scroll>
				</div>
		    )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

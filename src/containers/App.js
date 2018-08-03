import React, { Component } from 'react';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {products} from '../products';
import './App.css';

class App extends Component { 
	constructor()  {
		super()
		this.state = {
			products: [],
			searchfield: ''
		}
	}

	componentDidMount (){
		this.setState({ products: products })
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { products, searchfield } = this.state;
		const filteredProducts = products.filter(product => {
			return product.product.toLowerCase().includes(searchfield.toLowerCase())
		})
		if (products.length == 0) {
			return <h1>Loading</h1>
		} else {
		    return (
		      <div>
			    <div className="App-title">
			        <h1>Grocery</h1>
		        </div>
		        <SearchBox SearchChange={this.onSearchChange}/>
		        <Scroll>
			        <ErrorBoundry>
			        	<CardList products={filteredProducts} />
			      	</ErrorBoundry>
		      	</Scroll>
		      </div>
		    );
		}
    }
}

export default App;

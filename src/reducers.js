import {
	CHANGE_SEARCH_FIELD,
	REQUEST_PRODUCTS_PENDING,
	REQUEST_PRODUCTS_SUCCESS,
	REQUEST_PRODUCTS_FAILED,
	CHANGE_USER,
	} from './constants'

const initialStateSearch ={
	searchField: ''
}

export const searchProducts = (state= initialStateSearch, action={}) => {
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField: action.payload})
		default:
			return state
		}
}

const initialStateSearchProducts ={
	isPending: true,
	products: [],
	error: ''
}

export const requestProducts = (state= initialStateSearchProducts, action={}) => {
	switch(action.type) {
		case REQUEST_PRODUCTS_PENDING:
			return Object.assign({}, state, {isPending: true}) 
		case REQUEST_PRODUCTS_SUCCESS:
			return Object.assign({}, state, {products: action.payload, isPending: false})
		case REQUEST_PRODUCTS_FAILED:
			return Object.assign({}, state, {error: action.payload})
		default:
			return state;
	}
}


const initialStateUser ={
	isPending: true,
	user: {
			id: '',
			name: '',
			password: '',
			email: '',
			address: '',
			joined: ''
			}
}

export const loadUser = (state= initialStateUser, action={}) => {
	switch (action.type) {
		case CHANGE_USER:
			return Object.assign({}, state, {searchField: action.payload})
		default:
			return state
		}
}

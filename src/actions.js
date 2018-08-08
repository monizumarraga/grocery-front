import {
	CHANGE_SEARCH_FIELD,
	REQUEST_PRODUCTS_PENDING,
	REQUEST_PRODUCTS_SUCCESS,
	REQUEST_PRODUCTS_FAILED,
	REQUEST_USER_PENDING,
	CHANGE_USER
	} from './constants'

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

export const requestProducts =() =>(dispatch) => {
	dispatch({ 
		type: REQUEST_PRODUCTS_PENDING 
		});
	fetch ('http://localhost:3000/items/')
		.then(response => response.json())
		.then(data => {
			dispatch({ 
				type: REQUEST_PRODUCTS_SUCCESS, 
				payload: data
				})
			})
	.catch(error => dispatch({ 
						type: REQUEST_PRODUCTS_FAILED, 
						payload: error
					}))
}

export const setUser = (text) => ({
	type: CHANGE_USER,
	payload: text
})
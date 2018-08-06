import {
	CHANGE_SEARCH_FIELD,
	REQUEST_PRODUCTS_PENDING,
	REQUEST_PRODUCTS_SUCCESS,
	REQUEST_PRODUCTS_FAILED
	} from './constants'

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

export const requestProducts =() =>(dispatch) => {
	dispatch({ 
		type: REQUEST_PRODUCTS_PENDING 
		});
	fetch ('http://localhost:3000/')
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

import React, { Component } from 'react';

class Register extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			password: '',
			name: this.props.user["name"],
			new_password: '',
			address: this.props.user["address"]
		}
	}

	onNameChange = (event) =>{
		this.setState( {name: event.target.value})
	}

	onPasswordChange = (event) =>{
		if (event.target.value){
		this.setState( {password: event.target.value})
		}
	}

	onAddressChange = (event) =>{
		this.setState( {address: event.target.value})
	}

	onNewPasswordChange = (event) =>{
		this.setState( {new_password: event.target.value})
	}

	onUpdate = (event) =>{
		let id=this.props.user["id"]
		let name=this.state.name
		let address=this.state.address
		if(id && name){  
			fetch(`http://localhost:3000/change/:${id}`, {
				method: 'put',
	            headers: {'Content-Type': 'application/json',
				        'Accept': 'application/json',
				    	'Access-Control-Allow-Origin': '*',
				    	'Access-Control-Allow-Credentials': 'true'
				    	},
		    	body: JSON.stringify({
					id: id,
					name: name,
					address: address
				})
			})
			.then(response => response.json())
		    .then(user => {
				if (user.id) {
					alert(user)
					this.props.loadUser(user)
					this.props.onRouteChange('home')
				}else {
					alert(user)
				}
			})
		}
		else{
			if(!name){
				alert("name cannot be empty")
				this.setState( {name: this.props.user["name"]})
			}
		}
	}


	onPasswordUpdate = (event) =>{
		let email=this.props.user["email"]
		let password= this.state.password
		let newpassword= this.state.new_password
		if(password && newpassword){  
			fetch('http://localhost:3000/changepassword', {
				method: 'put',
	            headers: {'Content-Type': 'application/json',
				        'Accept': 'application/json',
				    	'Access-Control-Allow-Origin': '*'	,
				    	'Access-Control-Allow-Credentials': 'true'
				    	},
		    	body: JSON.stringify({
					email: email,
					password: password,
					newpassword: newpassword
				})
			})
			.then(response => response.json())
		    .then(user => {
				if (user.id) {
					alert(user)
					this.props.loadUser(user)
					this.setState({ password: "" })
					this.setState({ new_password: "" })
				}else {
					alert(user)
				}
			})
		}
		else{
				alert("password cannot be empty")
		}
	}


	onDelete = (event) =>{
		let id=this.props.user["id"]
			fetch('http://localhost:3000/userdelete', {
				method: 'delete',
	            headers: {'Content-Type': 'application/json',
				        'Accept': 'application/json',
				    	'Access-Control-Allow-Origin': '*'	,
				    	'Access-Control-Allow-Credentials': 'true'
				    	},
		    	body: JSON.stringify({
					id: id
				})
			})
			.then(response => response.json())
		    .then(user => {
				if (user) {
					this.props.onRouteChange('signout')
					alert(user)
				}else {
					alert(user)
				}
			})
	}

	render(){
	return (
		<article className='br3 ba dark-gray b--black-10 mv4 w-300 w-150-m w-70.5-l mw6 shadow-10 center'>
		<div className='pa4 black-80'>
		  <div className='measure'>
		    <fieldset id='sign_up' className='ba b--transparent ph0 mh0'
				style={{backgroundColor:'rgba(203, 221, 240, 1)'}}>
		      <legend className='f1 fw6 ph0 mh0'>User Information</legend>
		       <div className='mt3'>
		        <h2 className='db fw6 lh-copy f6' > Email: {this.props.user["email"]}</h2>
		      </div>
		      <div className='mt3'>
		        <label className='db fw6 lh-copy f6' htmlFor='name'>Name</label>
		        <input 
		        	onChange={this.onNameChange}
		        	className="input-block-level" 
		        	type='text' 
		        	name='name'  
		        	value={this.state.name}
		        	id='name'
		        	/>
		      </div>
		      <div className='mv3'>
		        <label className='db fw6 lh-copy f6' htmlFor='address'>Address</label>
		        <input 
		        	onChange={this.onAddressChange}
		        	className="input-block-level" 
		        	type='address' 
		        	name='address'  
		        	value={this.state.address}
		        	id='address'
		        	/>
		      </div>
		    </fieldset>
		    <div className=''>
		      <input 
		      		onClick={this.onUpdate}
		      		className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib' 
		      		style={{margin:'5px'}}
		      		type='submit' 
		      		value='Update'
		      		/>
		    </div>
		    <div className='lh-copy mt3'>
		    </div>
		  </div>
		  <div className='measure'>
		    <fieldset id='sign_up' className='ba b--transparent ph0 mh0'
			style={{backgroundColor:'rgba(203, 221, 240, 1)'}}>
		      <legend className='f1 fw6 ph0 mh0'>Password update</legend>
		      <div className='mv3'>
		        <label className='db fw6 lh-copy f6' htmlFor='password'>Previous password</label>
		        <input 
		        	onChange={this.onPasswordChange}
		        	className="input-block-level" 
		        	type='password' 
		        	name='password'  
		        	id='password'
		        	/>
		      </div>
		      <div className='mv3'>
		        <label className='db fw6 lh-copy f6' htmlFor='new_password'>New password</label>
		        <input 
		        	onChange={this.onNewPasswordChange}
		        	className="input-block-level" 
		        	type='password' 
		        	name='new_password'  
		        	id='new_password'
		        	/>
		      </div>
		    </fieldset>
		    </div>
		    <div className=''>
		      <input 
		      		onClick={this.onPasswordUpdate}
		      		className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib' 
		      		style={{margin:'5px'}}
		      		type='submit' 
		      		value='Change'
		      		/>
		    </div>
		  <div className='measure'>
		    <fieldset id='sign_up' className='ba b--transparent ph0 mh0'
			style={{backgroundColor:'rgba(203, 221, 240, 1)'}}>
		      <legend className='f1 fw6 ph0 mh0'>User delete</legend>
		      <h2 className='db fw6 lh-copy f6' > User {this.props.user["name"]} will be deleted</h2>
		     </fieldset>
		    <div className=''>
		      <input 
		      		onClick={this.onDelete}
		      		className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib' 
		      		style={{margin:'5px'}}
		      		type='submit' 
		      		value='Delete user'
		      		/>
		    </div>
		    
		  </div>
		</div>
		</article>
		);
	}
}

export default Register;
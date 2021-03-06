import React, { Component } from 'react';
import logo from '../logo.png';

class Register extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			name: ''
		}
	}

	onNameChange = (event) =>{
		this.setState( {name: event.target.value})
	}

	onEmailChange = (event) =>{
		this.setState( {email: event.target.value})
	}

	onPasswordChange = (event) =>{
		this.setState( {password: event.target.value})
	}

	onSubmitSignin = (event) =>{
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.id) {
				this.props.loadUser(user)
				this.props.onRouteChange('home')
			}else {
				alert(user)
			}
		})

	}

	render(){
	return (
		<article className='br3 ba dark-gray b--black-10 mv4 w-200 w-100-m w-50-l mw6 shadow-10 center'>
		<div className='pa4 black-80'>
			<img style= {{paddingTop: '20px'}} src={logo} alt="logo" width='auto' heigth='150px' /> 
		  <div className='measure'>
		    <fieldset id='sign_up' className='ba b--transparent ph0 mh0'
			style={{backgroundColor:'rgba(203, 221, 240, 1)'}}>
		      <legend className='f1 fw6 ph0 mh0'>Register</legend>
		      <div className='mt3'>
		        <label className='db fw6 lh-copy f6' htmlFor='name'>Name</label>
		        <input 
		        	onChange={this.onNameChange}
		        	className="input-block-level"
		        	type='text' 
		        	name='name'  
		        	id='name'
		        	/>
		      </div>
		      <div className='mt3'>
		        <label className='db fw6 lh-copy f6' htmlFor='email-address'>Email</label>
		        <input 
		        	onChange={this.onEmailChange}
		        	className="input-block-level"
		        	type='email' 
		        	name='email-address' 
		        	id='email-address'
		        	/>
		      </div>
		      <div className='mv3'>
		        <label className='db fw6 lh-copy f6' htmlFor='password'>Password</label>
		        <input 
		        	onChange={this.onPasswordChange}
		        	className="input-block-level" 
		        	type='password' 
		        	name='password'  
		        	id='password'
		        	/>
		      </div>
		    </fieldset>
		    <div className=''>
		      <input 
		      		onClick={this.onSubmitSignin}
		      		className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib' 
		      		style={{margin:'10px'}}
		      		type='submit' 
		      		value='Register'
		      		/>
		    </div>
		    <div className='lh-copy mt3'>
		    </div>
		  </div>
		</div>
		</article>
		);
	}
}

export default Register;
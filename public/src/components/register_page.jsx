import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { login } from '../actions';
import axios from 'axios';

import NavBar from './nav_bar';
import PageHeader from './header';

class RegisterPage extends Component {
	constructor(props) {
	    super(props);

	    this.state = { 
			registrationError: ""
		}
	}

	// Render individual input field
	renderInputField(field) {
		const {meta : {touched, error} } = field;
		const className =`form-group ${touched && error ? 'has-danger' : ''}`;
		
		return (
			<div className={className}>
				<input 
					className="form-control"
					type={field.type}
					placeholder={field.placeholder}
					{...field.input}
				/>
				<div className="error">
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	onSubmit(values) {
		axios.post("/api/register", values)
			.then(response => {
				if(response.status === 200) {
					this.setState({registrationError: ""});
					this.props.login(values.username);
					this.props.history.push('/');
				}
			})
			.catch(error => {
				if(error.response.status === 400) {
					this.setState({registrationError: "This username is not available. Please choose another one."});
				} else {
					this.setState({registrationError: "Ops, Something unexpected happens..."});
				}
			})
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<div className="login_page">
				<NavBar />
				<PageHeader />
				
				<div className="home_img"></div>

				<div className="row justify-content-center">
					<div className="col-10 col-md-8 col-lg-5">
						<div className="error form-error">{this.state.registrationError}</div>

						<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
							<p>Your Full name:</p>
							<Field 
								placeholder="Full name"
								name="name"
								type="text"
								component={this.renderInputField}
							/>

							<p>Your username:</p>
							<Field 
								placeholder="username"
								name="username"
								type="text"
								component={this.renderInputField}
							/>

							<p>Your password:</p>
							<Field 
								placeholder="password"
								name="password"
								type="password"
								component={this.renderInputField}
							/>

							<button action="submit" className="btn btn-block btn-submit">Submit</button>
						</form>
					</div>
				</div>
			</div>
		);	
	}
	   
}

// Validation methods for the input values
function validate(values) {
	const errors = {};

	if(!values.name) {
		errors.name = "Please enter your name";
	} else {
		if(values.name.length < 3) errors.name = "Please include at least 3 characters of your name";
		if (/[\[\]\\/{}|\\<>]/.test(values.name) == true) {errors.name = "Please obmit any special character from your name.";}   
	}

	if(!values.username) {
		errors.username = "Please enter your username";
	} else {
		if(values.username.length < 3) errors.username = "Please include at least 3 characters of your username";
		if (/[\[\]\\/{}|\\<>]/.test(values.username) == true) {errors.username = "Please obmit any special character from your username.";}   
	}

	if(!values.password) {
		errors.password = "Please enter your password";
	} else {
		if(values.password.length < 3) errors.password = "Please include at least 3 characters of your password";
		if (/[\[\]\\/{}|\\<>]/.test(values.password) == true) {errors.password = "Please obmit any special character from your password.";}   
	}

	return errors;
}


export default reduxForm({
  	validate,
	form: 'RegisterForm'
})(
	connect(null, { login })(RegisterPage)
);



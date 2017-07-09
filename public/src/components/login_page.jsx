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

class LoginPage extends Component {
	constructor(props) {
	    super(props);

	    this.state = { 
			loginError: ""
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

		axios.post("/api/login", values)
			.then(response => {
				if(response.status === 200) {
					this.setState({loginError: ""});
					this.props.login(values.username);
					this.props.history.push('/');
				}
			})
			.catch(error => {
				if(error.response.status === 401) {
					this.setState({loginError: "Invalid username/password"});
				} else {
					this.setState({loginError: "Ops, Something unexpected happens..."});
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
						<div className="error form-error">{this.state.loginError}</div>

						<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
							<p>Your username:</p>
							<Field 
								placeholder="username"
								name="username"
								type="text"
								component={this.renderInputField}
							/>

							<p>Your password:</p>
							<Field 
								placeholder="username"
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

	if(!values.username) {
		errors.username = "Please enter your name";
	} else {
		if(values.username.length < 3) errors.username = "Please include at least 3 characters of your name";
		if (/[\[\]\\/{}|\\<>]/.test(values.username) == true) {errors.username = "Please obmit any special character from your name.";}   
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
	form: 'LogInForm'
})(
	connect(null, { login })(LoginPage)
);



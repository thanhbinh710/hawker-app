import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { fetchLocations } from '../actions';
import axios from 'axios';

import NavBar from './nav_bar';
import PageHeader from './header';

class ExplorePage extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
			formError: ""
		}    
  	}

  	componentDidMount() {
		this.props.fetchLocations();
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

	// renderMap() {
		

	// }

	onSubmit(values) {
		var { locations } = this.props;
		// var distanceList = [];
		// var service = new google.maps.DistanceMatrixService();
				
		// // console.log("locations", locations);
		

		// for (var i = 0; i < locations.length; i ++) {
		// 	service.getDistanceMatrix({
		// 		origins: `${values.location} Singapore`,
  //               destinations: locations[i],
  //               travelMode: "DRIVING"
		// 	}, function(response) {
		// 		console.log(response);
		// 		if (response.status === 200) {
		// 			distanceList.push({
		// 				"hawker_name": locations[i].hawker_name,
		// 				"hawker_location": locations[i].hawker_location,
		// 				"duration": "12 hours 21 mins"
		// 			});
		// 		}
		// 	})
		// }

	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<div className="explore_page">
				<NavBar />
				<PageHeader />

				<div className="row justify-content-center">
					<div className="col-10 col-md-8 col-lg-5">
						<div className="error form-error">{this.state.formError}</div>
							
						<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
							<p>Please key in your location</p>
							<Field 
								placeholder="Your location"
								name="location"
								type="text"
								component={this.renderInputField}
							/>

							<button action="submit" className="btn btn-find">Find A Hawker</button>

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

	if(!values.location) {
		errors.location = "Please enter your location";
	} else {
		if(values.location.length < 3) errors.location = "Please include at least 3 characters of your location";
		if (/[\[\]\\/{}|\\<>]/.test(values.location) == true) {errors.location = "Please obmit any special character from your location.";}   
	}

	return errors;
}

function mapStateToProps(state) {
	return {
    	locations: state.locations
  	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchLocations }, dispatch);
}

export default reduxForm({
  	validate,
	form: 'ExploreForm'
})(
	connect(mapStateToProps, mapDispatchToProps)(ExplorePage)
);



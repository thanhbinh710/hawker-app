import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchLocations } from '../actions';
import axios from 'axios';

import NavBar from './nav_bar';
import PageHeader from './header';

class ExplorePage extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	locationErr: "",
			location: ""
		}

		this.populatePosition = this.populatePosition.bind(this); 
		this.useCurrentLocation = this.useCurrentLocation.bind(this); 
  	}

  	componentDidMount() {
		this.props.fetchLocations();
	}

	onInputChange(location) {
		this.setState({location});	
	}

	findNearestHawkerCenter() {
		var { locations } = this.props;
		console.log("location", this.state.location);
		console.log("locations", locations);
	}

	useCurrentLocation() {
		if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(this.populatePosition);
	    } else {
	        this.setState({locationErr: "Geolocation is not supported by this browser."});
	    }
	}

	populatePosition(position) {
	    var currentLoc = `${position.coords.latitude} ${position.coords.longitude}`;
	    console.log("currentLoc", currentLoc);

	    // Unable to bind 'this' with the timeout function
	    setTimeout(function() {
	    	// Error setting state
    		this.setState({location: currentLoc});
    	}, 500);

	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<div className="explore_page">
				<NavBar />
				<PageHeader />

				<div className="row justify-content-center">
					<div className="col-10 col-md-8 col-lg-5">
						<div className="error form-error">{this.state.locationErr}</div>
						<div className="input_box">
						  	<input 
						  		className="form-control input_full" 
						  		type="text" 
						  		placeholder="Your location..." 
						  		value={this.state.location}
						  		onChange={event => this.onInputChange(event.target.value)} />
						</div>

						<div className="button-container">
							<button className="btn-location" onClick={()=> this.useCurrentLocation()}>Use My Location</button>
							<button className="btn btn-find" onClick={()=> this.findNearestHawkerCenter()}>Find A Hawker</button>
						</div>

						

					</div>
				</div>
			</div>
		);
    }
}



function mapStateToProps(state) {
	return {
    	locations: state.locations
  	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchLocations }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(ExplorePage);

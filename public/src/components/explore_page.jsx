import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { nearestLocation } from '../actions';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';

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

	onInputChange(location) {
		this.setState({location});
	}

	findNearestHawkerCenter() {

		if(!this.state.location) {
			this.setState({locationErr: "Please key in a value for your location"});
		} else {
			const request = axios.get(`/api/getDistance/${this.state.location}`)
				.then(response => {
					if(response.status === 200) {
						this.setState({locationErr: ""});
						
						var hawkerDistance = response.data
						hawkerDistance.sort(function(a, b){return a.hawker_distance - b.hawker_distance });
						this.props.nearestLocation(hawkerDistance[0]);
					}
				}).catch(error => {
					console.log(error);
					this.setState({locationErr: "Ops. Something went wrong"});
				});

		
		}
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
    	}, 1000);

	}

	renderMap() {
		var { nearestLoc } = this.props;
		
		if(!nearestLoc) {
			return (
				<div className='helptext'>Please key in your location to search for the nearest Hawker Center</div>
			)
		} else {
			return (
				<div>
					<p className="location-result">Hawker Location: <strong>{nearestLoc.hawker_location}</strong></p>
					<p className="location-result">Distance from you: <strong>{nearestLoc.hawker_distance}m </strong></p>

					<div className="map-container">
						<GoogleMapReact
							defaultCenter= {{lat: 1.2932, lng: 103.8525}}
							defaultZoom= {15}
						>
						</GoogleMapReact>
					</div>

					<div><Link className="btn btn-find" to={`https://maps.google.com/?q=${nearestLoc.hawker_location}`} target="_blank">Getting there</Link></div>
				</div>
			)
		}
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

						<div className="result-container">
							{this.renderMap()}
						</div>


					</div>
				</div>
			</div>
		);
    }
}

function mapStateToProps(state) {
	return {
		nearestLoc: state.nearestLoc
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ nearestLocation }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ExplorePage)

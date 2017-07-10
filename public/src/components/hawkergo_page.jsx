import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
// import { searchFood } from '../actions';


import NavBar from './nav_bar';
import PageHeader from './header';

class HawkerGOPage extends Component {

	constructor(props) {
	    super(props);
	    
	    
  	}
	
	render() {
		return (
			<div className="hawkergo_page">
				<NavBar />
				<PageHeader />

				<div className="row justify-content-center">
					<div className="col-10 col-md-8 col-lg-5">
						<div className="hawkergo_content">
							<p>This is a mini location-based game that can be played when you are at certain hawker center that is quite similar to PokemonGO</p>
						</div>
					</div>
				</div>
			</div>
		);
    }
}

export default HawkerGOPage;
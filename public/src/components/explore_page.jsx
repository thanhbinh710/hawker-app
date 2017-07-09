import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
// import { searchFood } from '../actions';


import NavBar from './nav_bar';

class ExplorePage extends Component {

	constructor(props) {
	    super(props);
	    
	    
  	}
	
	render() {
		return (
			<div className="home_page">
				<NavBar />
				<header>
					<h2 className="page_title">Explore</h2>
				</header>

				<div>TO BE DONE</div>
			</div>
		);
    }
}

export default ExplorePage;
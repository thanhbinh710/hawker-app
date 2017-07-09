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
						<div>TO BE DONE</div>
					</div>
				</div>
			</div>
		);
    }
}

export default HawkerGOPage;
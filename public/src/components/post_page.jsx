import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchActivePosts } from '../actions';

import NavBar from './nav_bar';
import PageHeader from './header';
import ImageSlider from './slider';

class PostPage extends Component {

	constructor(props) {
	    super(props);
  	}

  	componentDidMount() {
  		const { id } = this.props.match.params;
		this.props.fetchActivePosts(id);
	}

	renderSlider(imgSlider) {
		if(imgSlider) {
			return (
				<ImageSlider data={imgSlider} />
			);
		}
	}
	
	renderPosts() {
		var { activePost } = this.props;

		if(!activePost) {
			return (
				<div className="loading">
					<p><img src="https://arrowcms.s3.amazonaws.com/zone_img/loading.gif" /></p>
					<p>Loading...</p>
				</div>
			)
		} else {
			return (
				<div>
					<h3 className="post_title" dangerouslySetInnerHTML={{__html: activePost.post_title}}></h3>
					<div className="author">
						<Link className="post_link" to={`/profile/${activePost.username}`}>
							<img className="img-user" src={activePost.user_dp} alt={activePost.username} />
							By <span className="username">{activePost.username}</span>
						</Link>
					</div>
					<div className="slide_container">{this.renderSlider(activePost.post_media)}</div>
					<p dangerouslySetInnerHTML={{__html: activePost.post_content}}></p>
					
				</div>
			)
		}
	}

	render() {
		return (
			<div className="post_page">
				<NavBar />
				<PageHeader />

				<div className="container body_content">
					<div className="row justify-content-center">
						<div className="col-12 col-md-10 col-lg-7">
							{this.renderPosts()}
						</div>
					</div>
				</div>
			</div>
		);
    }
}

function mapStateToProps(state) {
	return {
    	activePost: state.activePost
  	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchActivePosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
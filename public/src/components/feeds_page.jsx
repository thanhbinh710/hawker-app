import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions';

import NavBar from './nav_bar';

class FeedsPage extends Component {

	constructor(props) {
	    super(props);
  	}
	
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts() {
		var { posts } = this.props;

		if(!posts || posts.length < 1) {
			return (
				<div className="loading">
					<p><img src="https://arrowcms.s3.amazonaws.com/zone_img/loading.gif" /></p>
					<p>Loading...</p>
				</div>
			)
		} else {
			return posts.map((post, index) => {
				return (
					<div className="card" key={post.post_id}>
					    <img className="card-img-top img-fluid" src={post.post_media[0]} alt={post.post_title} />
					    <div className="card-block">
							<Link className="post_link" to={`/profile/${post.user_id}`}>
						    	<div className="card-user">
						    		<img className="card-img-user" src={post.user_dp} alt={post.username} />
					    		</div>
				    		</Link>
							<Link className="post_link" to={`/post/${post.post_id}`}>
						      	<h4 className="card-title">{post.post_title}</h4>
						      	<p className="card-text">{post.post_excerpt}</p>
				  			</Link>
					    </div>
					    <div className="card-footer">
					      	<small className="text-muted"><span className="icon_heart"></span>{post.hearts}</small>
					    </div>
				  	</div>
				)
			})
		}
	}

	render() {
		return (
			<div className="home_page">
				<NavBar />
				<header>
					<h2 className="page_title">My Feeds</h2>
				</header>

				<div className="container body_content">
					<div className="row justify-content-center">
						<div className="col-12 col-md-10">
							<div className="card-deck">{this.renderPosts()}</div>
						</div>
					</div>
				</div>
			</div>
		);
    }
}

function mapStateToProps(state) {
	return {
    	posts: state.posts
  	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedsPage);

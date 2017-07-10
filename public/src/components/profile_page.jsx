import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchProfile } from '../actions';
import StarRatingComponent from 'react-star-rating-component';

import NavBar from './nav_bar';
import PageHeader from './header';
import ImageSlider from './slider';

class ProfilePage extends Component {

	constructor(props) {
	    super(props);
  	}

  	componentDidMount() {
  		const { username } = this.props.match.params;
		this.props.fetchProfile(username);
	}
	
	renderSlider(imgSlider) {
		if(imgSlider) {
			return (
				<ImageSlider data={imgSlider} />
			);
		}
	}

	renderComments(comments) {
		console.log("comments", comments);
		if(comments) {
			return comments.map((comment, index) => {
				return (
					<div key={index} className="comment">
						<div className="comment-user_id">
							<div className="comment-user_dp">
								<img className="user-thumb" src={comment.user_dp} alt={comment.user_id} />
							</div>
						</div>
						<div className="comment-comment">{comment.comment}</div>
					</div>
				);
			});	
		}
	}

	renderProfile() {
		var { profile } = this.props;

		if(!profile) {
			return (
				<div className="loading">
					<p><img src="https://arrowcms.s3.amazonaws.com/zone_img/loading.gif" /></p>
					<p>Loading...</p>
				</div>
			)
		} else {
			var starNo = parseInt(profile.ratings);
			return(
				<div className="user-profile">
					<div className="user-dp-container">
						<img className="user-dp" src={profile.user_dp} alt={profile.username} />
					</div>
					<div className="user-ratings">
						<div>
							<StarRatingComponent 
				                starCount={10}
				                value={starNo}
				                editing={false}
				                renderStarIcon={() => <span className="icon_star"></span>}
				            />
			            </div>
						<div>{profile.ratings}/10</div>
					</div>
					<div className="user-details">
						<p className="user_name">{profile.username}</p>
						<p className="user-name">{profile.name}</p>
					</div>
					
					<p dangerouslySetInnerHTML={{__html: profile.bio}}></p>
					<div className="slide_container">{this.renderSlider(profile.user_media)}</div>
					<div className="comments-container">
						<h4>Comments Section</h4>
						<div className="comments">{this.renderComments(profile.comments)}</div>
					</div>
				</div>
			)
		}
	}

	render() {
		return (
			<div className="profile_page">
				<NavBar />
				<PageHeader />

				<div className="container body_content">
					<div className="row justify-content-center">
						<div className="col-12 col-md-10 col-lg-7">
							{this.renderProfile()}
						</div>
					</div>
				</div>
			</div>
		);
    }
}


function mapStateToProps(state) {
	return {
    	profile: state.profile
  	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchProfile }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
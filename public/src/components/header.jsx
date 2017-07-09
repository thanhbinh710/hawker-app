import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions';

class PageHeader extends Component {
	
	render() {
		var page_title = "";
		
		if (window.location.pathname === '/') {
			page_title = "My Feeds";
		} else if (window.location.pathname === '/explore') {
			page_title = "Explore";
		} else if (window.location.pathname === '/hawkergo') {
			page_title = "HawkerGO";
		} else if (window.location.pathname === '/login') {
			page_title = "Log in";
		} else if (window.location.pathname === '/register') {
			page_title = "Register";
		} else if (_.includes(window.location.pathname, 'profile')) {
			page_title = "Profile Page";
		} else if (_.includes(window.location.pathname, 'post')) {
			page_title = "Post Page";
		}

		var { user } = this.props;
		var loginClass = (!user) ? 'show' : 'hide';
		var logoutClass = (!user) ? 'hide' : 'show';

		return (
			<div>
				<header>
					<div className="row">
						<div className="col-9">
							<h2 className="page_title">{page_title}</h2>
						</div>
						<div className="col-3">
							<Link className={`login_link ${loginClass}`} to="/login">Log in</Link>
							<div className={`welcome-text ${logoutClass}`}>
								<Link to={`/profile/${user}`}>Welcome {user}</Link>
								<a className="logout_link" onClick={() => this.props.logout()}>Log out</a>
							</div>
						</div>
					</div>
				</header>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user
	};
}

export default connect(mapStateToProps, { logout })(PageHeader);

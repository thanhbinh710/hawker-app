import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
	
	render() {
		return (
			<div>
				<footer>
					<p>
						<Link className={`${window.location.pathname === '/' ? 'active': ''}`} to="/">
							<span className="nav_icon icon-newspaper-1"></span>Feeds
						</Link>
						<Link className={`${window.location.pathname === '/explore' ? 'active': ''}`} to="/explore">
							<span className="nav_icon icon_search"></span>Explore
						</Link>
						<Link className={`${window.location.pathname === '/hawkergo' ? 'active': ''}`} to="/hawkergo">
							<span className="nav_icon icon-gamepad"></span>HawkerGO
						</Link>
					</p>
				</footer>
			</div>
		);
	}
}

export default NavBar;
import 'header/header.css'
import React from 'react'
import { Link } from 'react-router'

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="content">
					<div className="logo">Hindsight</div>
					<nav>
						<Link to="/search">Search</Link>
						<Link to="/connections">Connections</Link>
						<Link to="/dashboard">Dashboard</Link>
						<Link to="/profile/123">Profile</Link>
					</nav>
				</div>
			</header>
		);
	}
}

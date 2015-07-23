import React from "react"
import {Route, Redirect} from 'react-router';

import Root from "root"
import Search from 'pages/search'
import Profile from 'pages/profile'

export default (
	<Route component={Root}>
		<Route path="search" component={Search} />
		<Route path="profile/:id" component={Profile} />
		<Redirect from='/' to='home' />
	</Route>
)

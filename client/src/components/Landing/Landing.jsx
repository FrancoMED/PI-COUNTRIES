import React from 'react';
import { NavLink } from 'react-router-dom';

function Landing() {
	return (
		<div key="landing">
			<h1>Welcome</h1>
			<NavLink to="/countries">START</NavLink>
		</div>
	);
}

export default Landing;

import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar.jsx';

export default function NavBar() {
	return (
		<div>
			<ul>
				<NavLink to="/activities">Create Activity</NavLink>
			</ul>
			<ul>
				<SearchBar />
			</ul>
			<ul></ul>
		</div>
	);
}

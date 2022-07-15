import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Unique({ id, name, flag, continent }) {
	return (
		<>
			<NavLink to={`/details/${id}`}>
				<h3>{name}</h3>

				<img src={flag} alt="imagen" />

				<h5>{continent}</h5>
			</NavLink>
		</>
	);
}

import React, { useEffect } from 'react';
import Unique from './Unique.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { allCountries } from '../../redux/actions/actions.js';

export default function Cards() {
	const dispatch = useDispatch();
	const countries = useSelector((state) => state.countries);

	useEffect(() => {
		dispatch(allCountries());
	}, [dispatch]);

	return (
		<>
			{countries.length &&
				countries.map((country) => (
					<div key={country.id}>
						<Unique
							id={country.id}
							name={country.name}
							flag={country.flag}
							continent={country.continent}
						/>
					</div>
				))}
		</>
	);
}

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { countryDetail, clearPage } from '../../redux/actions/actions.js';

function Details() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const country_detail = useSelector((state) => state.country_detail);
	useEffect(() => {
		dispatch(countryDetail(id));
		return () => {
			dispatch(clearPage());
		};
	}, [dispatch, id]);
	// if (!country_detail.data) {
	// 	console.log('cargando...');
	// } else {
	// 	console.log(country_detail.data.name);
	// }
	// console.log(country_detail.data?.id : "cargando...");
	return (
		<>
			{!country_detail.data ? (
				<h1>CARGANDO...</h1>
			) : (
				<>
					<div key={country_detail.data.id}>
						<NavLink to="/countries">Back</NavLink>
						<h1>{country_detail.data.name}</h1>
						<span>Code: {country_detail.data.id}</span>
						<br />
						<br />
						<span>Region: {country_detail.data.region}</span>
						<br />
						<br />
						<span>Capital/s: {country_detail.data.capital}</span>
						<br />
						<br />
						<span>Located at {country_detail.data.subregion}</span>
						<br />
						<br />
						<span>Perimeter: {country_detail.data.area} kms2</span>
						<br />
						<br />
						<span>Total poblation: {country_detail.data.population}</span>
						<br />
						<br />
						<img
							src={country_detail.data.flag}
							alt={country_detail.data.name}
						/>
					</div>
				</>
			)}
		</>
	);
}

export default Details;

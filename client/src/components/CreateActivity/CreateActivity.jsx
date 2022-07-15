import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function CreateActivity() {
	const [data, setData] = useState({
		name: '',
		duration: 0,
		difficulty: undefined,
		season: ''
		// countries: []
	});
	const [error, setError] = useState({
		name: 'The name of the activity is required',
		duration: 'The duration of the activity is required',
		difficulty: 'The difficulty of the activity is required',
		season: 'The season of the activity is required',
		countries: ''
	});

	const [msgError, setMsgError] = useState('');
	function validate(state) {
		let error = {};
		if (!state.name) {
			error.name = 'The name of the activity is required';
		} else if (!/[a-zñÑA-Zá-úÁ-Ú]/.test(state.name)) {
			error.name = 'The name of the activity is invalid';
		} else {
			error.name = '';
		}
		if (!state.duration) {
			error.duration = 'The duration of the activity is required';
		} else if (isNaN(state.duration) || state.duration < 1) {
			error.duration = 'The duration of the activity is invalid';
		} else {
			error.duration = '';
		}
		if (!state.difficulty) {
			error.difficulty = 'The difficulty of the activity is required';
		} else {
			error.difficulty = '';
		}
		if (!state.season) {
			error.season = 'The season of the activity is required';
		} else {
			error.season = '';
		}
		// if (!state.countries.length) {
		// 	error.countries = 'Add at least one country';
		// }
		return error;
	}

	function handleChange(e) {
		e.preventDefault();
		setData((prevState) => {
			const newState = {
				...prevState,
				[e.target.name]: e.target.value
			};
			setError(validate(newState));

			return newState;
		});
	}

	const handleOnSubmit = (e) => {
		e.preventDefault();
		// console.log(error.season);
		if (
			data.name &&
			data.duration &&
			data.difficulty &&
			data.season &&
			!error.name &&
			!error.duration &&
			!error.difficulty &&
			!error.season
		) {
			setMsgError('');
		} else {
			setMsgError('Completar Form');
		}
	};
	return (
		<div>
			<NavLink to="/countries">Back</NavLink>
			<form>
				<div>
					Activity Name:{' '}
					<input
						type="text"
						name="name"
						value={data.name}
						onChange={handleChange}
					/>
					<output>{error.name || ''}</output>
				</div>
				<br />
				<div>
					Activity duration (hs):{' '}
					<input
						type="number"
						name="duration"
						value={data.duration}
						onChange={handleChange}
					/>
					<output>{error.duration || ''}</output>
				</div>
				<br />
				<div>
					Difficulty:{' '}
					<select
						name="difficulty"
						defaultValue="select_D"
						onChange={handleChange}
					>
						<option disabled="disabled" value="select_D">
							Select Difficulty
						</option>
						<option value="1">1 - Easy</option>
						<option value="2">2 - Upper Easy</option>
						<option value="3">3 - Medium</option>
						<option value="4">4 - Advanced</option>
						<option value="5">5 - Profesional</option>
					</select>
					<output>{error.difficulty || ''}</output>
				</div>
				<br />
				<div>
					Season:{' '}
					<select name="season" defaultValue="select_S" onChange={handleChange}>
						<option disabled="disabled" value="select_S">
							Select Season
						</option>
						<option value="Summer">Summer</option>
						<option value="Autumn">Autumn</option>
						<option value="Winter">Winter</option>
						<option value="Spring">Spring</option>
					</select>
					<output>{error.season || ''}</output>
				</div>
				<br />
				<div>
					<input type="submit" value="SUBMIT" onClick={handleOnSubmit} />
					<br />
					<output>{msgError}</output>
				</div>
			</form>
		</div>
	);
}

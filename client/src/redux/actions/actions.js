import axios from 'axios';

export const ALL_COUNTRIES = 'ALL_COUNTRIES';
export const COUNTRY_DETAIL = 'COUNTRY_DETAIL';
export const CLEAR_PAGE = 'CLEAR_PAGE';

const ROUTE_COUNTRIES = 'http://localhost:3001/countries';

export function allCountries() {
	return async function call(dispatch) {
		let aux = await axios.get(`${ROUTE_COUNTRIES}/get`);
		return dispatch({
			type: ALL_COUNTRIES,
			payload: aux.data
		});
	};
}

export function countryDetail(id) {
	return async function call(dispatch) {
		let aux = await axios.get(`${ROUTE_COUNTRIES}/${id}`);
		return dispatch({
			type: COUNTRY_DETAIL,
			payload: aux
		});
	};
}

export function clearPage() {
	return { type: CLEAR_PAGE };
}

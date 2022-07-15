import { ALL_COUNTRIES, COUNTRY_DETAIL, CLEAR_PAGE } from '../actions/actions';

const initialState = {
	countries: [],
	create_activity: [],
	country_detail: {}
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ALL_COUNTRIES:
			return { ...state, countries: action.payload };

		case COUNTRY_DETAIL:
			return { ...state, country_detail: action.payload };

		case CLEAR_PAGE:
			return { ...state, country_detail: {} };

		default:
			return state;
	}
};

export default rootReducer;

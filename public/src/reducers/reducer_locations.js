import { FETCH_LOCATIONS } from '../actions';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_LOCATIONS:
			return action.payload.data;
	}
	return state;
}

import { NEAREST_LOCATION } from '../actions';

export default function(state = null, action) {
	switch (action.type) {
		case NEAREST_LOCATION:
			return action.payload;
	}
	return state;
}

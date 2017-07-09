import { FETCH_ACTIVE_POST } from '../actions';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_ACTIVE_POST:
			return action.payload.data;
	}
	return state;
}

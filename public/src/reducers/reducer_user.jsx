import { LOGIN_USER } from '../actions';

export default function(state = null, action) {
	switch (action.type) {
		case LOGIN_USER:
			return action.payload;
	}
	return state;
}

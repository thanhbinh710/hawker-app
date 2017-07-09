import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import PostsReducer from './reducer_posts';
import ActivePostReducer from './reducer_activePost';
import ProfileReducer from './reducer_profile';
import UserReducer from './reducer_user';
import LocationsReducer from './reducer_locations';

const rootReducer = combineReducers({
	posts: PostsReducer,
	activePost: ActivePostReducer,
	profile: ProfileReducer,
	user: UserReducer,
	locations: LocationsReducer,
	form: formReducer
});

export default rootReducer;

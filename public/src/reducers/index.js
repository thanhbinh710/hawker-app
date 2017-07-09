import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import PostsReducer from './reducer_posts';
import ActivePostReducer from './reducer_activePost';
import ProfileReducer from './reducer_profile';

const rootReducer = combineReducers({
	posts: PostsReducer,
	activePost: ActivePostReducer,
	profile: ProfileReducer,
	form: formReducer
});

export default rootReducer;

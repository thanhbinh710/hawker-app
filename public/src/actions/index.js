import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_ACTIVE_POST = 'fetch_active_post';
export const FETCH_PROFILE = 'fetch_profile';

// Fetch all posts from backend
export function fetchPosts() {
	const request = axios.get("/api/getAllPosts");

	return {
		type: FETCH_POSTS,
		payload: request
	};
}

// Fetch one post based on the post_id provided
export function fetchActivePosts(id) {
	const request = axios.get(`/api/getPost/${id}`);

	return {
		type: FETCH_ACTIVE_POST,
		payload: request
	};
}

// Fetch one profile based on the user_id provided
export function fetchProfile(id) {
	const request = axios.get(`/api/getProfile/${id}`);

	return {
		type: FETCH_PROFILE,
		payload: request
	};
}
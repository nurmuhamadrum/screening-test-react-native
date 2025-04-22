import {Post} from '../types';

export const GET_POSTS_FETCH = 'GET_POSTS_FETCH';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const getPostsFetch = () => ({
  type: GET_POSTS_FETCH,
});

export const getPostsSuccess = (posts: Post[]) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsFailure = (error: any) => ({
  type: GET_POSTS_FAILURE,
  payload: error,
});

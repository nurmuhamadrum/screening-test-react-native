import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_POSTS_FETCH, getPostsFailure, getPostsSuccess} from './actions';
import {Post} from '../types';

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then(response =>
    response.json(),
  );
};

function* workFetchPosts() {
  try {
    const posts: Post[] = yield call(fetchPosts);
    yield put(getPostsSuccess(posts));
  } catch (e) {
    yield put(getPostsFailure(e));
  }
}

function* mySaga() {
  yield takeEvery(GET_POSTS_FETCH, workFetchPosts);
}

export default mySaga;

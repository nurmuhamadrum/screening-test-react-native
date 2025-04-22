import {Action, InitialState} from '../types';
import {GET_POSTS_FETCH, GET_POSTS_SUCCESS, GET_POSTS_FAILURE} from './actions';

const initialState: InitialState = {
  posts: [],
  loading: false,
};

const myFirstReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_POSTS_FETCH:
      return {
        ...state,
        loading: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default myFirstReducer;

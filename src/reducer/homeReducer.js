import { fromJS } from 'immutable';
import { createReducer } from 'redux-immutablejs';
import {
  GET_ARTICLE_GROUP_OK,
  GET_IMG_GROUP_OK,
  GET_VIDEO_GROUP_OK
} from '../action/homeAction';

const initialState = fromJS([]);

export const articleListReducer = createReducer(initialState, {
  [GET_ARTICLE_GROUP_OK]: (state, action) =>
    state.concat(action.payload.get('data'))
});

export const imgListReducer = createReducer(initialState, {
  [GET_IMG_GROUP_OK]: (state, action) => action.payload.get('data')
});

export const videoListReducer = createReducer(initialState, {
  [GET_VIDEO_GROUP_OK]: (state, action) => action.payload.get('data')
});

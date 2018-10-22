import { fromJS } from 'immutable';
import { createReducer } from 'redux-immutablejs';
import { LOGIN_OK, REGISTER_OK, RESET_PASSWORD_OK } from '../action/userAction';

const initialState = fromJS([]);

export const articleListReducer = createReducer(initialState, {
  [LOGIN_OK]: (state, action) => action.payload
});
export const imgListReducer = createReducer(initialState, {
  [REGISTER_OK]: (state, action) => action.payload
});
export const videoListReducer = createReducer(initialState, {
  [RESET_PASSWORD_OK]: (state, action) => action.payload
});

import { fromJS } from 'immutable';
import { createReducer } from 'redux-immutablejs';
import { GET_READHUB_OK } from '../action/readHubAction';

const initialState = fromJS([]);

export const readHubReducer = createReducer(initialState, {
  [GET_READHUB_OK]: (state, action) => state.concat(action.payload.get('data'))
});

import { fromJS } from 'immutable';
import { createReducer } from 'redux-immutablejs';
import { SHOW_TOAST, HIDE_TOAST } from '../action/toastActions';

const initialState = fromJS({
  show: false,
  iconClass: null,
  text: null
});

const toastReducer = createReducer(initialState, {
  [SHOW_TOAST]: (state, action) => action.payload.set('show', true),
  [HIDE_TOAST]: (state, action) => initialState
});

export default toastReducer;

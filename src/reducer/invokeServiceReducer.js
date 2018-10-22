import { fromJS } from 'immutable';
import { START_INVOKE, INVOKE_ERROR, INVOKE_OK } from '../action/invokeActions';
import { createReducer } from 'redux-immutablejs';

const initialState = fromJS({
  isFetching: false,
  loaded: false,
  serviceType: null
});

const reducer = createReducer(initialState, {
  [START_INVOKE]: (state, action) =>
    state
      .set('isFetching', true)
      .set('loaded', false)
      .set('serviceType', action.payload.getIn(['request', 'method'])),
  [INVOKE_ERROR]: (state, action) => initialState,
  [INVOKE_OK]: (state, action) => {
    let response = action.payload;
    let requestCount = response.getIn(['request', 'data', 'count']);
    let responseData = response.get('data');
    let loaded = false;
    if (
      requestCount != null &&
      responseData != null &&
      responseData.size != null
    ) {
      loaded = responseData.size < requestCount;
    }
    return state.set('isFetching', false).set('loaded', loaded);
  }
});

export default reducer;

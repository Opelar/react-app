import { Record, fromJS } from 'immutable';
import { startInvoke, invokeOK, invokeError } from '../action/invokeActions';
import makeQueryString from './makeQueryString';

const serverURL =
  'https://www.easy-mock.com/mock/59e6b7f00cfd446fbae844f0/www.webapp.com';
const readHubURL = 'https://api.readhub.me';

export const RequestRecord = Record({
  method: 'GET',
  path: null,
  data: null // immutable
});

export const ResponseRecord = Record({
  request: null,
  data: null
});

export const ErrorInfoRecord = Record({
  request: null,
  code: null
});

function sendRequestToServer(request) {
  let method = request.get('method');
  let path = request.get('path');
  let data = request.get('data');
  let url = '';

  if (data.get('fromReadHub')) {
    url = `${readHubURL}${path}`;
  } else {
    url = `${serverURL}${path}`;
  }

  let postData = null;
  let headers = {};
  let userId = window._store.getState().getIn(['user', 'id']);

  if (userId != null) {
    headers.userId = userId;
  }

  if (method === 'GET') {
    let qs = '';
    if (data != null) {
      qs = makeQueryString(data.toJS());
    }
    if (qs.length > 0) {
      url = `${url}?${qs}`;
    }
  } else if (
    request.get('method') === 'POST' ||
    request.get('method') === 'PUT' ||
    request.get('method') === 'DELETE'
  ) {
    postData = data != null ? data.toJS() : null;
  }

  /**
   * invoke serverce
   * @param method
   * @param url
   * @param data
   */
  function invoke(method, url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: method,
        headers: headers,
        body: data
      })
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  }

  console.log('invoke:', { path, postData });
  return invoke(method, url, postData);
}

function makeRequest(method, path, requestData) {
  let data = fromJS(requestData);
  // console.log(requestData)
  return RequestRecord({ method, path, data });
}

function dispatchInvokeServiceActions(promise, dispatch, useToast) {
  return promise
    .then(response => {
      dispatch(invokeOK(response, useToast));
      return response;
    })
    .catch(err => {
      dispatch(invokeError(err, useToast));
      return Promise.reject(err);
    });
}

export function defineService({ method, path }) {
  return {
    method,
    path,
    invoke(data, dispatch, useToast = true) {
      let request = makeRequest(method, path, data);
      if (dispatch) {
        dispatch(startInvoke(request, useToast));
        return dispatchInvokeServiceActions(
          sendRequestToServer(request),
          dispatch,
          useToast
        );
      } else {
        return sendRequestToServer(request);
      }
    }
  };
}

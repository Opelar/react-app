import { showToastInTime, showToast, hideToast } from '../action/toastActions';

function dispatch(action) {
  let store = window && window._store;
  if (store) {
    store.dispatch(action);
  }
}

export function showOK(message, keep = 1000) {
  // console.log("toast OK:", { message, keep });
  dispatch(showToastInTime('toast-ok', message, keep));
}

export function showError(message, keep = 1200) {
  // console.log("toast Error:", { message, keep });
  dispatch(showToastInTime('toast-error', message, keep));
}

export function showLoading(message) {
  // console.log("toast loading:", { message });
  dispatch(showToast('toast-loading', message));

  return {
    hide() {
      dispatch(hideToast());
    }
  };
}

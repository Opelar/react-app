import action from '../utils/action';

export const SHOW_TOAST = 'SHOW_TOAST';
export const HIDE_TOAST = 'HIDE_TOAST';

export const showToastInTime = (
  iconClass,
  text = '请求失败',
  keepTime
) => dispatch => {
  dispatch(showToast(iconClass, text));
  setTimeout(function() {
    dispatch(hideToast());
  }, keepTime);
};

export const showToast = (iconClass, text) =>
  action(SHOW_TOAST, { iconClass, text });

export const hideToast = () => action(HIDE_TOAST, {});

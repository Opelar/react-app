import action from "../utils/action";

export const SHOW_TOAST = "SHOW_TOAST";
export const HIDE_TOAST = "HIDE_TOAST";

export function showToastInTime(iconClass, text = "请求失败", keepTime) {
  return function(dispatch) {
    dispatch(showToast(iconClass, text));
    setTimeout(function() {
      dispatch(hideToast());
    }, keepTime);
  };
}

export function showToast(iconClass, text) {
  return action(SHOW_TOAST, { iconClass, text });
}

export function hideToast() {
  return action(HIDE_TOAST, {});
}

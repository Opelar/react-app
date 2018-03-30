import action from "../utils/action";
import {
  loginService,
  registerService,
  resetPasswordService
} from "../service/userService";
import { showError } from "../utils/toast";

export const LOGIN_OK = "LOGIN_OK";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const REGISTER_OK = "REGISTER_OK";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const RESET_PASSWORD_OK = "RESET_PASSWORD_OK";
export const RESET_PASSWORD_FAIL = "RESET_PASSWORD_FAIL";

export function login(tel, password, onOK) {
  return function(dispatch) {
    return loginService
      .invoke({ tel, password }, dispatch)
      .then(res => {
        dispatch(action(LOGIN_OK, res));
        if (onOK) onOK()
      })
      .catch(err => {
        showError(err.msg);
        dispatch(action(LOGIN_FAIL, err));
      });
  };
}

export function register() {
  return function(dispatch) {
    return registerService
      .invoke({}, dispatch)
      .then(res => dispatch(action(REGISTER_OK, res)))
      .catch(err => {
        showError(err.msg);
        dispatch(action(REGISTER_FAIL, err));
      });
  };
}

export function resetPassword() {
  return function(dispatch) {
    return resetPasswordService
      .invoke({}, dispatch)
      .then(res => dispatch(action(RESET_PASSWORD_OK, res)))
      .catch(err => {
        showError(err.msg);
        dispatch(action(RESET_PASSWORD_FAIL, err));
      });
  };
}

import action from '../utils/action';
import {
  loginService,
  registerService,
  resetPasswordService
} from '../service/index';
import { showError } from '../utils/toast';

export const LOGIN_OK = 'LOGIN_OK';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const REGISTER_OK = 'REGISTER_OK';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const RESET_PASSWORD_OK = 'RESET_PASSWORD_OK';
export const RESET_PASSWORD_FAIL = 'RESET_PASSWORD_FAIL';

export const login = (tel, password, onOK) => dispatch =>
  loginService
    .invoke({ tel, password }, dispatch)
    .then(res => {
      dispatch(action(LOGIN_OK, res));
      if (onOK) onOK();
    })
    .catch(err => {
      showError(err.msg);
      dispatch(action(LOGIN_FAIL, err));
    });

export const register = () => dispatch =>
  registerService
    .invoke({}, dispatch)
    .then(res => dispatch(action(REGISTER_OK, res)))
    .catch(err => {
      showError(err.msg);
      dispatch(action(REGISTER_FAIL, err));
    });

export const resetPassword = () => dispatch =>
  resetPasswordService
    .invoke({}, dispatch)
    .then(res => dispatch(action(RESET_PASSWORD_OK, res)))
    .catch(err => {
      showError(err.msg);
      dispatch(action(RESET_PASSWORD_FAIL, err));
    });

import '../../style/login.css';
import React, { useState } from 'react';
import classList from '../../utils/classList';
import { showError } from '../../utils/toast';
import UserHeader from '../Headers/UserHeader.jsx';

export default props => {
  const [tel, setTel] = useState('');
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [pwdStatus, setPwdStatus] = useState('');

  function handleSubmit() {
    const reg = /^1[34578]\d{9}$/;

    if (!reg.test(tel)) {
      showError('手机号格式不正确');
      return false;
    }
    if (nickName.length < 2 || nickName.length > 8) {
      showError('昵称为2~8位');
      return false;
    }
    if (!password || password.length > 12 || password.length < 6) {
      showError('密码为6~12位');
      return false;
    }
    // submit
  }

  return (
    <div className="register login animated fadeIn">
      <UserHeader title={'注册账号'} {...props} />
      <div className="login-wrap">
        <div className="logo">
          <img src="/image/react.png" alt="logo" />
        </div>
        <p className="page-title">注册新用户</p>
        <form className="login-form register-from">
          <div className="form-group">
            <input
              type="tel"
              placeholder="手机号"
              onChange={e => setTel(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="用户名"
              onChange={e => setNickName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type={!pwdStatus ? 'password' : 'text'}
              placeholder="密码"
              onChange={e => setPassword(e.target.value)}
            />
            <div
              className={classList('seepwd', {
                showpwd: pwdStatus === true
              })}
              onClick={() => setPwdStatus(!pwdStatus)}
            />
          </div>
        </form>
        <div className="form-submit">
          <button type="button" className="login-btn" onClick={handleSubmit}>
            注册
          </button>
        </div>
      </div>
    </div>
  );
};

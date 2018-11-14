import '../../style/login.css';
import React, { useState } from 'react';
import classList from '../../utils/classList';
import UserHeader from '../Headers/UserHeader.jsx';
import { showError } from '../../utils/toast';

export default props => {
  const [pwdStatus, setPwdStatus] = useState(false);
  const [codeStatus, setCodeStatus] = useState(true);
  const [btnTxt, setBtnTxt] = useState('发送验证码');
  const [tel, setTel] = useState('');
  const [authcode, setAuthcode] = useState('');
  const [password, setPassword] = useState('');

  function handleGetAuthCode(e) {
    let second = 60;
    const reg = /^1[34578]\d{9}$/;
    let txt = '秒后重发';

    if (!reg.test(tel)) {
      showError('手机号格式不正确');
      return false;
    }

    setCodeStatus(false);
    let t = setInterval(() => {
      --second;
      console.log(second);

      setBtnTxt(second.toString() + txt);

      if (second === 0) {
        clearInterval(t);
        setBtnTxt('发送验证码');
        setCodeStatus(true);
      }
    }, 1000);
  }

  function handleSubmit() {
    const reg = /^1[34578]\d{9}$/;

    if (!reg.test(tel)) {
      showError('手机号格式不正确');
      return false;
    }
    if (!authcode || authcode.length > 6) {
      showError('验证码不能为空且在六位以内');
      return false;
    }
    if (!password || password.length > 12 || password.length < 6) {
      showError('密码为6-12位');
      return false;
    }

    // 提交
  }

  return (
    <div className="register login animated fadeIn">
      <UserHeader title={'找回密码'} {...props} />

      <div className="login-wrap">
        <div className="logo">
          <img src="/image/react.png" alt="logo" />
        </div>
        <p className="page-title">找回密码</p>
        <form className="login-form register-from" action="">
          <div className="form-group">
            <input
              type="tel"
              placeholder="手机号"
              onChange={e => setTel(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="验证码"
              onChange={e => setAuthcode(e.target.value)}
            />
            <button
              type="button"
              className={classList('authcode', { disabled: !codeStatus })}
              disabled={!codeStatus ? 'disabled' : false}
              onClick={handleGetAuthCode}
            >
              {btnTxt}
            </button>
          </div>
          <div className="form-group">
            <input
              type={!pwdStatus ? 'password' : 'text'}
              placeholder="新密码"
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
            确定
          </button>
        </div>
      </div>
    </div>
  );
};

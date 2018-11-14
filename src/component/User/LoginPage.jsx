import '../../style/login.css';
import React, { useState } from 'react';
import { Link } from 'react-router';
import { showError } from '../../utils/toast';
import UserHeader from '../Headers/UserHeader.jsx';

export default props => {
  const [tel, setTel] = useState('');
  const [password, setPassword] = useState('');

  function onOK() {
    let next = props.params.next;
    if (next == null) {
      next = '/';
    }
    props.router.replace(decodeURIComponent(next));
  }

  function handleSubmit() {
    const reg = /^1[34578]\d{9}$/;

    if (!reg.test(tel)) {
      showError('手机号格式不正确');
      return false;
    }
    if (!password || password.length > 12 || password.length < 6) {
      showError('密码为6~12位');
      return false;
    }

    props.userLogin(tel, password, onOK);
  }

  return (
    <div className="login animated fadeIn">
      <UserHeader title={'用户登录'} {...props} />

      <div className="login-wrap">
        <div className="logo">
          <img src="/image/react.png" alt="logo" />
        </div>
        <p className="page-title">欢迎使用</p>
        <form className="login-form" action="">
          <div className="form-group">
            <input
              type="text"
              placeholder="手机号"
              onChange={e => setTel(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="密码"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </form>

        <div className="form-submit">
          <button className="login-btn" type="button" onClick={handleSubmit}>
            登录
          </button>
        </div>
        <div className="meline">
          <Link to="/forgetPassword">
            <span className="go-forget">忘记密码？</span>
          </Link>
          <Link to="/register">
            <span className="go-register">注册账号</span>
          </Link>
        </div>

        <div className="other-login">其他账号登录</div>

        <div className="tenxun">
          <div className="login-way login-way0" />
          <div className="login-way login-way1" />
          <div className="login-way login-way2" />
        </div>
      </div>
    </div>
  );
};

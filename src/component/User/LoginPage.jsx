import '../../style/login.css';
import React from 'react';
import { Link } from 'react-router';
import { showError } from '../../utils/toast';
import { useFormInput } from '../../utils/useHooks';
import UserHeader from '../Headers/UserHeader.jsx';

export default props => {
  const tel = useFormInput('');
  const password = useFormInput('');

  function onOK() {
    let next = props.params.next;
    if (next == null) {
      next = '/';
    }
    props.router.replace(decodeURIComponent(next));
  }

  function handleSubmit() {
    const reg = /^1[34578]\d{9}$/;
    const telVal = tel.value;
    const pwdVal = password.value;

    if (!reg.test(telVal)) {
      showError('手机号格式不正确');
      return false;
    }
    if (!pwdVal || pwdVal.length > 12 || pwdVal.length < 6) {
      showError('密码为6~12位');
      return false;
    }

    props.userLogin(telVal, pwdVal, onOK);
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
            <input type="text" placeholder="手机号" {...tel} />
          </div>

          <div className="form-group">
            <input type="password" placeholder="密码" {...password} />
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

import '../../style/login.css';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { showError } from '../../utils/toast';
import UserHeader from '../Headers/UserHeader.jsx';
// import AnimateWrapper from "../common/AnimateWrapper.jsx";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tel: '',
      password: ''
    };
  }

  wechatLogin = () => {
    // wechat
  };

  qqLogin = () => {
    // QQ
  };

  weboLogin = () => {
    // webo
  };

  handleSubmit = () => {
    const reg = /^1[34578]\d{9}$/;
    let tel = this.state.tel;
    let password = this.state.password;

    // 简单验证
    if (!reg.test(tel)) {
      showError('手机号格式不正确');
      return false;
    }
    if (!password || password.length > 12 || password.length < 6) {
      showError('密码为6~12位');
      return false;
    }

    this.props.userLogin(tel, password, this.onOK);
  };

  onOK = () => {
    let next = this.props.params.next;
    if (next == null) {
      next = '/';
    }
    this.props.router.replace(decodeURIComponent(next));
  };

  render() {
    // console.log(this.props);
    return (
      <div className="login animated fadeIn">
        <UserHeader title={'用户登录'} {...this.props} />

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
                onChange={e => this.setState({ tel: e.target.value })}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="密码"
                onChange={e => this.setState({ password: e.target.value })}
              />
            </div>
          </form>

          <div className="form-submit">
            <button
              className="login-btn"
              type="button"
              onClick={this.handleSubmit}
            >
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
            <div className="login-way login-way0" onClick={this.wechatLogin} />
            <div className="login-way login-way1" onClick={this.qqLogin} />
            <div className="login-way login-way2" onClick={this.weboLogin} />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;

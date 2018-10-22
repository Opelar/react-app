import '../../style/login.css';
import React, { Component } from 'react';
import classList from '../../utils/classList';
import UserHeader from '../Headers/UserHeader.jsx';
import { showError } from '../../utils/toast';
// import AnimateWrapper from "../common/AnimateWrapper.jsx";

class ForgetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pwdStatus: false,
      second: 60,
      codeStatus: true,
      btnTxt: '发送验证码',
      tel: '',
      authcode: '',
      password: ''
    };
  }

  handleGetAuthCode = e => {
    const reg = /^1[34578]\d{9}$/;
    let s = this.state.second;
    let tel = this.state.tel;
    let txt = '秒后重发';

    // 验证
    // 带上tel请求服务端
    if (!reg.test(tel)) {
      showError('手机号格式不正确');
      return false;
    }

    this.setState({ codeStatus: false });
    let t = setInterval(() => {
      --s;
      console.log(s);

      this.setState({ btnTxt: s.toString() + txt });

      if (s === 0) {
        clearInterval(t);
        this.setState({
          btnTxt: '发送验证码',
          codeStatus: true
        });
      }
    }, 1000);
  };

  handleSubmit = () => {
    const reg = /^1[34578]\d{9}$/;
    let tel = this.state.tel;
    let authcode = this.state.authcode;
    let password = this.state.authcode;

    // 验证
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
  };

  render() {
    let pwdStatus = this.state.pwdStatus;
    let btnTxt = this.state.btnTxt;
    let codeStatus = this.state.codeStatus;

    return (
      <div className="register login animated fadeIn">
        <UserHeader title={'找回密码'} {...this.props} />

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
                onChange={e => this.setState({ tel: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="验证码"
                onChange={e => this.setState({ authcode: e.target.value })}
              />
              <button
                type="button"
                className={classList('authcode', { disabled: !codeStatus })}
                disabled={!codeStatus ? 'disabled' : false}
                onClick={this.handleGetAuthCode}
              >
                {btnTxt}
              </button>
            </div>
            <div className="form-group">
              <input
                type={!pwdStatus ? 'password' : 'text'}
                placeholder="新密码"
                onChange={e => this.setState({ password: e.target.value })}
              />
              <div
                className={classList('seepwd', {
                  showpwd: pwdStatus === true
                })}
                onClick={() => this.setState({ pwdStatus: !pwdStatus })}
              />
            </div>
          </form>
          <div className="form-submit">
            <button
              type="button"
              className="login-btn"
              onClick={this.handleSubmit}
            >
              确定
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgetPassword;

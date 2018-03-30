import "../../style/login.css";
import React, { Component } from "react";
import classList from "../../utils/classList";
import { showError } from "../../utils/toast";
import UserHeader from "../Headers/UserHeader.jsx";
// import AnimateWrapper from "../common/AnimateWrapper.jsx";

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pwdStatus: false,
      tel: "",
      nickName: "",
      password: ""
    };
  }

  handleSubmit = () => {
    const reg = /^1[34578]\d{9}$/;
    let tel = this.state.tel;
    let nickName = this.state.nickName;
    let password = this.state.password;

    // 简单验证
    if (!reg.test(tel)) {
      showError("手机号格式不正确");
      return false;
    }
    if (nickName.length < 2 || nickName.length > 8) {
      showError("昵称为2~8位");
      return false;
    }
    if (!password || password.length > 12 || password.length < 6) {
      showError("密码为6~12位");
      return false;
    }

    // submit
  };

  render() {
    let pwdStatus = this.state.pwdStatus;

    return (
      <div className="register login animated fadeIn">
        <UserHeader title={"注册账号"} {...this.props} />
        <div className="login-wrap">
          <div className="logo">
            <img src="/image/react.png" alt="logo" />
          </div>
          <p className="page-title">注册新用户</p>
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
                type="text"
                placeholder="用户名"
                onChange={e => this.setState({ nickName: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type={!pwdStatus ? "password" : "text"}
                placeholder="密码"
                onChange={e => this.setState({ password: e.target.value })}
              />
              <div
                className={classList("seepwd", {
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
              注册
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;

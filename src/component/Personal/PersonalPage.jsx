import '../../style/personal.css';

import React, { Component } from 'react';
import { Link } from 'react-router';
import Navbars from '../Navbars/Navbars.jsx';
import OuterHeader from '../Headers/OuterHeader.jsx';

class PersonalPage extends Component {
  render() {
    return (
      <div className="personal-page">
        <OuterHeader title={'我的'} />

        <div className="userInfo fine-border-bottom">
          <div className="line">
            <div className="avatar">
              <img src="/image/icon/avatar.png" alt="avatar" />
            </div>
            <div className="nickname">
              <div className="name">见贤思齐</div>
              <p className="desc">hello react</p>
            </div>
          </div>
        </div>

        <div className="personal-list fine-border-bottom">
          <div className="line fine-border-bottom">
            <div className="icon icon0" />
            <div className="txt">收藏</div>
          </div>

          <div className="line fine-border-bottom">
            <div className="icon icon1" />
            <div className="txt">动态</div>
          </div>

          <div className="line">
            <div className="icon icon2" />
            <div className="txt">专栏</div>
          </div>
        </div>

        <div className="personal-list fine-border-bottom">
          <div className="line fine-border-bottom">
            <div className="icon icon3" />
            <div className="txt">意见反馈</div>
          </div>
          <div className="line">
            <div className="icon icon4" />
            <div className="txt">设置</div>
          </div>
        </div>

        <div>
          <Link to="/login">
            <span>登录</span>
          </Link>
        </div>
        <div>
          <Link to="/register">
            <span>注册</span>
          </Link>
        </div>

        {/* <div>
          <Link to="/myEditor">
            <span>富文本编辑器</span>
          </Link>
        </div> */}

        <Navbars tabIndex={3} />
      </div>
    );
  }
}

export default PersonalPage;

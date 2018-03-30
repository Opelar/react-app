import "../../style/recommend.css";

import React, { Component } from "react";
import { Link } from "react-router";
import Navbars from "../Navbars/Navbars.jsx";
import OuterHeader from "../Headers/OuterHeader.jsx";

// 搜索最顶端
class Search extends Component {
  render() {
    return (
      <div className="home-search">
        <Link to="search">
          <div className="search">
            <div className="icon" />
            <div className="txt">搜索</div>
          </div>
        </Link>
        <div className="fenlei">{/* 分类 */}</div>
      </div>
    );
  }
}

class RecommendPage extends Component {
  render() {
    return (
      <div className="recommend-page">
        <Search />

        <OuterHeader title={"推荐"} />

        <h1>推荐尽请期待</h1>

        <Navbars tabIndex={1} />
      </div>
    );
  }
}

export default RecommendPage;

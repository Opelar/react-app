import "../../style/recommend.css";

import React, { Component } from "react";
import { Link } from "react-router";
import Navbars from "../Navbars/Navbars.jsx";
import OuterHeader from "../Headers/OuterHeader.jsx";

import getTime from "../../utils/getTime";

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

class ReadItem extends Component {
  constructor(props) {
    super();
  }
  render() {
    const item = this.props.item;

    return (
      <div className="item">
        <div className="title">
          {item.get("title")}{" "}
        </div>
        <div className="ctime">
          {getTime(new Date(item.get("publishDate")).valueOf())}
        </div>
        <div className="summary">{item.get("summary")}</div>
      </div>
    );
  }
}

class RecommendPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScroll: false,
      scrollTop: null,
      toBottom: false
    };
  }

  render() {
    const readHubList = this.props.readHubList;

    return (
      <div className="recommend-page">
        <Search />
        <OuterHeader title={"热门话题"} />

        <div className="read-list">
          {readHubList.map((item, index) => (
            <ReadItem key={index} item={item} />
          ))}
        </div>

        <Navbars tabIndex={1} />
      </div>
    );
  }

  componentDidMount() {
    this.props.getReadHubHot({ fromReadHub: true, pageSize: 20 });
  }
}

export default RecommendPage;

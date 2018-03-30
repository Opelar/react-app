import "../../style/cmtList.css";
import React, { Component } from "react";

const cmtList = [
  {
    id: "1",
    avatar: "/image/cover/q0.jpg",
    userName: "朱塞佩·托纳多雷",
    cmtTxt: "写得真鸡巴烂啊",
    ctime: "刚刚"
  },
  {
    id: "2",
    avatar: "/image/cover/q1.jpg",
    userName: "莫尼卡·贝鲁奇",
    cmtTxt: "文章真好",
    ctime: "3小时前"
  },
  {
    id: "3",
    avatar: "/image/cover/q3.jpg",
    userName: "ShitGod",
    cmtTxt: "it's very good!!",
    ctime: "昨天"
  }
];

class CommentList extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <section className="comment">
        <div className="title">留言</div>

        <div className="write">
          <div id="writeCmt">
            <span>写留言</span>
            <img src="/image/write.png" alt="write" />
          </div>
        </div>

        <div className="list">
          {cmtList.map((item, index) => (
            <CommentItem key={index} data={item} />
          ))}
        </div>
      </section>
    );
  }

  componentDidMount() {
    const articleId = this.props.articleId;
    // console.log("id为 " + articleId + " 的评论");
  }
}

class CommentItem extends Component {
  constructor(props) {
    super();
  }
  render() {
    const { avatar, userName, cmtTxt, ctime } = this.props.data;
    return (
      <div className="item">
        <div className="avatar">
          <img src={avatar} alt="avatar" className="avatar-img" />
        </div>
        <div className="right">
          <div className="name">{userName}</div>
          <div className="cmt-txt">{cmtTxt}</div>
          <div className="ctime">{ctime}</div>
        </div>
      </div>
    );
  }
}

export default CommentList;

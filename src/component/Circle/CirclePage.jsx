import "../../style/circle.css";
import React, { Component } from "react";
import Navbars from "../Navbars/Navbars.jsx";
import OuterHeader from "../Headers/OuterHeader.jsx";
import getTime from "../../utils/getTime"

const myCircle = {
  userId: "1000",
  userName: "OpenGirl",
  cover: "/image/cover/q0.jpg",
  userAvatar: "/image/cover/q1.jpg",
  circleList: [
    {
      id: "0",
      friendName: "往事不回首",
      friendAvatar: "/image/cover/q0.jpg",
      friendContent:
        "我是第一条动态，这是一个未知的世界我是第一条动态，这是一个未知的世界我是第一条动态，这是一个未知的世界我是第一条动态，这是一个未知的世界",
      cTime: "1516176418888",
      imgs: []
    },
    {
      id: "1",
      friendName: "回首",
      friendAvatar: "/image/cover/q1.jpg",
      friendContent: "我是第二条动态，这是一个未知的世界",
      cTime: "1516176418888",
      imgs: ["/image/imgGroup/6.jpg", "/image/imgGroup/7.jpg"]
    },
    {
      id: "2",
      friendName: "回首",
      friendAvatar: "/image/cover/q2.jpg",
      friendContent: "我是第二条动态，这是一个未知的世界",
      cTime: "1516176218888",
      imgs: [
        "/image/imgGroup/8.jpg",
        "/image/imgGroup/9.jpg",
        "/image/imgGroup/10.jpg",
        "/image/imgGroup/10.jpg",
        "/image/imgGroup/10.jpg",
        "/image/imgGroup/10.jpg",
        "/image/imgGroup/10.jpg",
        "/image/imgGroup/10.jpg",
        "/image/imgGroup/10.jpg"
      ]
    },
    {
      id: "3",
      friendName: "回首",
      friendAvatar: "/image/cover/q3.jpg",
      friendContent: "我是第二条动态，这是一个未知的世界",
      cTime: "1516002318888",
      imgs: ["/image/imgGroup/11.jpg"]
    }
  ]
};

class PageTop extends Component {
  render() {
    const { userName, cover, userAvatar } = this.props;
    return (
      <div className="circle-top">
        <div className="cover">
          <img src={cover} alt="cover" />
        </div>
        <div className="userName">{userName}</div>
        <div className="avatar">
          <img src={userAvatar} alt="avatar" />
        </div>
      </div>
    );
  }
}

class CircleItem extends Component {
  constructor(props) {
    super();
  }
  render() {
    const {
      friendName,
      friendAvatar,
      friendContent,
      cTime,
      imgs
    } = this.props.circleItem;
    return (
      <div className="circle-item fine-border-bottom">
        <div className="wrap">
          <div className="item-l">
            <img src={friendAvatar} alt="头像" />
          </div>

          <div className="item-r">
            <div className="name">{friendName}</div>
            <div className="content-text">{friendContent}</div>
            <div className="content-imgs">
              {imgs.map((item, index) => (
                <div key={index} className="img-wrap">
                  <img src={item} alt="img" />
                </div>
              ))}
            </div>

            <div className="ctime">{getTime(cTime)}</div>

            <div className="circle-cmt" />
          </div>
        </div>
      </div>
    );
  }
}

class CircleList extends Component {
  render() {
    const circleList = this.props.circleList;
    return (
      <div className="circle-list">
        {circleList.map((item, index) => (
          <CircleItem key={index} circleItem={item} />
        ))}
      </div>
    );
  }
}

class CirclePage extends Component {
  render() {
    const { userName, cover, userAvatar, circleList } = myCircle;
    return (
      <div className="circle-page">
        <OuterHeader title={"圈子动态"} />

        <PageTop userName={userName} cover={cover} userAvatar={userAvatar} />

        <CircleList circleList={circleList} />

        <Navbars tabIndex={2} />
      </div>
    );
  }
  componentDidMount() {
    const $ = ele => document.querySelectorAll(ele);
    const imgBoxParent = $(".content-imgs");

    for (let i = 0; i < imgBoxParent.length; i++) {
      let imgBox = imgBoxParent[i].childNodes;
      let len = imgBox.length;

      if (len === 1) {
        imgBox[0].style.width = "90%";
        imgBox[0].style.height = "auto";
      }

      if (len === 2) {
        imgBox[0].style.width = "45%";
        imgBox[0].style.height = "auto";
        imgBox[0].style.float = "left";
        imgBox[1].style.width = "45%";
        imgBox[1].style.height = "auto";
        imgBox[1].style.float = "left";
      }
    }
  }
}

export default CirclePage;

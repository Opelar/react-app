import "../../style/imgGroup.css";
import React, { Component } from "react";
import NativeScroll from "../common/NativeScroller";

class ImgGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const imgList = this.props.imgList;
    return (
      <NativeScroll
        className="swiper-slide animated fadeIn"
        ref={n => (this.scroller = n)}
        onTouchMove={this.onTouchMove}
        onScroll={this.onScroll}
        onScrollToBottom={this.onScrollToBottom}
      >
        <div className="scroll-anchor" ref={n => (this.scrollAnchor = n)} />
        <div className="img-group-list">
          {imgList.map((item, index) => (
            <ImgGroupItem key={index} data={item} />
          ))}
        </div>
      </NativeScroll>
    );
  }

  onScroll = (direction, scrollTop) => {
    if (direction === "down" && scrollTop <= this.isScrollHeight) {
      this.setState({ isScroll: false });
    }
  }

  onTouchMove = (direction) => {
    if (direction === "up") {
      this.setState({ isScroll: true });
    }
  }

  onScrollToBottom = () => {
    console.log("到底了");
  }

  componentDidMount() {
    this.isScrollHeight = this.scrollAnchor.offsetTop;
    this.props.getImg();
  }

  componentDidUpdate(prevProps) {
    // console.log(prevProps)
  }
}

class ImgGroupItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = this.props.data;
    return (
      <div className="img-group-item">
        <img src={data.get("coverImg")} alt="img" />
        <div className="num">{data.get("num")}</div>
      </div>
    );
  }
}

export default ImgGroup;

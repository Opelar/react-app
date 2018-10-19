import "../../style/videoGroup.css";
import React, { Component } from "react";

class VideoGroup extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // 发起请求数据
    this.props.getVideo();
  }

  render() {
    const videoList = this.props.videoList;
    return (
      <div className="swiper-slide animated fadeIn">
        <div className="video-group-list">
          {videoList.map((item, index) => (
            <VideoGroupItem key={index} data={item} />
          ))}
        </div>
      </div>
    );
  }
}

class VideoGroupItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;

    return (
      <div className="video-group-item fine-border-bottom">
        <div className="cover">
          <img
            className="video-cover"
            src={data.get("videoCover")}
            alt="cover"
          />
          <img className="play" src="/image/play.svg" alt="play" />
        </div>
        <div className="video-title">{data.get("videoTitle")}</div>
        <div className="video-desc">{data.get("videoDesc")}</div>
      </div>
    );
  }
}

export default VideoGroup;

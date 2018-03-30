import React, { Component } from "react";
// import { Link } from "react-router";
import Navbars from "../Navbars/Navbars.jsx";
import classList from "../../utils/classList";

import ImgGroup from "./ImgGroup";
import ArticleGroup from "./ArticleGroup";
import VideoGroup from "./VideoGroup";

// tab content
const TabContent = ({
  tabIdx,
  getArticle,
  getArticleLoadMore,
  getImg,
  getVideo,
  articleList,
  imgList,
  videoList,
  articleMoreList
}) => {
  const idx = parseFloat(tabIdx);
  let tabItemComp = null;

  if (idx === 0) {
    tabItemComp = (
      <ArticleGroup
        getArticle={getArticle}
        articleList={articleList}
      />
    );
  } else if (idx === 1) {
    tabItemComp = (
      <ImgGroup 
        getImg={getImg} 
        imgList={imgList} 
      />);
  } else if (idx === 2) {
    tabItemComp = (
      <VideoGroup 
        getVideo={getVideo} 
        videoList={videoList} 
      />);
  } else {
    return idx;
  }

  return (
    <div className="tab-content">
      <div className="swiper-container" ref={self => (this.swiperID = self)}>
        <div className="swiper-wrapper">{tabItemComp}</div>
      </div>
    </div>
  );
};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIdx: null
    };
  }

  componentWillMount() {
    let homeIndex = localStorage.getItem("homeIndex");

    if (homeIndex == null) {
      this.setState({ tabIdx: 0 });
    } else {
      this.setState({ tabIdx: homeIndex });
    }
  }

  componentDidMount() {
    // this.props.getArticle();
  }

  handleRefresh = (resolve, reject) => {
    this.props.getData();
  };

  render() {
    const tabIdx = parseFloat(this.state.tabIdx);
    const getArticle = this.props.getArticle;
    const getImg = this.props.getImg;
    const getVideo = this.props.getVideo;
    const articleList = this.props.articleList;
    const imgList = this.props.imgList;
    const videoList = this.props.videoList;

    return (
      <div className="home-page">
        <div className="home-tabs">
          <div
            className={classList("tab-item", { active: tabIdx === 0 })}
            onClick={e => {
              this.setState({ tabIdx: 0 });
              localStorage.setItem("homeIndex", 0);
            }}
          >
            文章
          </div>
          <div
            className={classList("tab-item", { active: tabIdx === 1 })}
            onClick={e => {
              this.setState({ tabIdx: 1 });
              localStorage.setItem("homeIndex", 1);
            }}
          >
            图集
          </div>
          <div
            className={classList("tab-item", { active: tabIdx === 2 })}
            onClick={e => {
              this.setState({ tabIdx: 2 });
              localStorage.setItem("homeIndex", 2);
            }}
          >
            视频
          </div>
        </div>

        <TabContent
          tabIdx={tabIdx}
          getArticle={getArticle}
          getImg={getImg}
          getVideo={getVideo}
          articleList={articleList}
          imgList={imgList}
          videoList={videoList}
        />

        <Navbars tabIndex={0} />
      </div>
    );
  }
}

export default HomePage;

import React, { useState } from 'react';
import Navbars from '../Navbars/Navbars.jsx';
import classList from '../../utils/classList';
import ImgGroup from './ImgGroup';
import ArticleGroup from './ArticleGroup';
import VideoGroup from './VideoGroup';

// tab content
const TabContent = ({
  tabIdx,
  getArticle,
  getImg,
  getVideo,
  articleList,
  imgList,
  videoList
}) => {
  const idx = parseInt(tabIdx);
  let tabItemComp = null;
  console.log(tabIdx);

  if (idx === 0) {
    tabItemComp = (
      <ArticleGroup getArticle={getArticle} articleList={articleList} />
    );
  } else if (idx === 1) {
    tabItemComp = <ImgGroup getImg={getImg} imgList={imgList} />;
  } else if (idx === 2) {
    tabItemComp = <VideoGroup getVideo={getVideo} videoList={videoList} />;
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

export default props => {
  const [tabIdx, setTabIdx] = useState(null);

  const {
    getArticle,
    getImg,
    getVideo,
    articleList,
    imgList,
    videoList
  } = props;

  return (
    <div className="home-page">
      <div className="home-tabs">
        <div
          className={classList('tab-item', { active: tabIdx === 0 })}
          onClick={() => {
            setTabIdx(0);
            localStorage.setItem('homeIndex', 0);
          }}
        >
          文章
        </div>
        <div
          className={classList('tab-item', { active: tabIdx === 1 })}
          onClick={() => {
            setTabIdx(1);
            localStorage.setItem('homeIndex', 1);
          }}
        >
          图集
        </div>
        <div
          className={classList('tab-item', { active: tabIdx === 2 })}
          onClick={() => {
            setTabIdx(2);
            localStorage.setItem('homeIndex', 2);
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
};

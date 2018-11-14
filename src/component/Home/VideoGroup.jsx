import '../../style/videoGroup.css';
import React, { useEffect } from 'react';

const VideoGroupItem = ({ data }) => (
  <div className="video-group-item fine-border-bottom">
    <div className="cover">
      <img className="video-cover" src={data.get('videoCover')} alt="cover" />
      <img className="play" src="/image/play.svg" alt="play" />
    </div>
    <div className="video-title">{data.get('videoTitle')}</div>
    <div className="video-desc">{data.get('videoDesc')}</div>
  </div>
);

export default ({ videoList, getVideo }) => {
  useEffect(() => getVideo(), []);
  return (
    <div className="swiper-slide animated fadeIn">
      <div className="video-group-list">
        {videoList.map((item, index) => (
          <VideoGroupItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

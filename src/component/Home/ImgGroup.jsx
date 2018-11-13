import '../../style/imgGroup.css';
import React, { useEffect } from 'react';
import NativeScroll from '../common/NativeScroller';

const ImgGroupItem = ({ data }) => (
  <div className="img-group-item">
    <img src={data.get('coverImg')} alt="img" />
    <div className="num">{data.get('num')}</div>
  </div>
);

export default ({ imgList, getImg }) => {
  useEffect(() => {
    getImg();// 两次？
  });

  return (
    <NativeScroll className="swiper-slide animated fadeIn">
      <div className="scroll-anchor" />
      <div className="img-group-list">
        {imgList.map((item, index) => (
          <ImgGroupItem key={index} data={item} />
        ))}
      </div>
    </NativeScroll>
  );
};

import '../../style/circle.css';
import React, { useEffect } from 'react';
import Navbars from '../Navbars/Navbars.jsx';
import OuterHeader from '../Headers/OuterHeader.jsx';
import getTime from '../../utils/getTime';
import myCircle from './myCircle';

const PageTop = ({ userName, cover, userAvatar }) => (
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

const CircleItem = ({ circleItem }) => {
  const { friendName, friendAvatar, friendContent, cTime, imgs } = circleItem;

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
};

const CircleList = ({ circleList }) => (
  <div className="circle-list">
    {circleList.map((item, index) => (
      <CircleItem key={index} circleItem={item} />
    ))}
  </div>
);

export default () => {
  const { userName, cover, userAvatar, circleList } = myCircle;

  useEffect(() => {
    const $ = ele => document.querySelectorAll(ele);
    const imgBoxParent = $('.content-imgs');

    for (let i = 0; i < imgBoxParent.length; i++) {
      let imgBox = imgBoxParent[i].childNodes;
      let len = imgBox.length;

      if (len === 1) {
        imgBox[0].style.width = '90%';
        imgBox[0].style.height = 'auto';
      }

      if (len === 2) {
        imgBox[0].style.width = '45%';
        imgBox[0].style.height = 'auto';
        imgBox[0].style.float = 'left';
        imgBox[1].style.width = '45%';
        imgBox[1].style.height = 'auto';
        imgBox[1].style.float = 'left';
      }
    }
  }, []);

  return (
    <div className="circle-page">
      <OuterHeader title={'圈子动态'} />
      <PageTop userName={userName} cover={cover} userAvatar={userAvatar} />
      <CircleList circleList={circleList} />
      <Navbars tabIndex={2} />
    </div>
  );
};

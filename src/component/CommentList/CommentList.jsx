import '../../style/cmtList.css';
import React, { useEffect } from 'react';
import cmtList from './cmtList';

const CommentItem = ({ data }) => {
  const { avatar, userName, cmtTxt, ctime } = data;

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
};

export default ({ articleId }) => {
  useEffect(() => {
    console.log(articleId);
  }, []);

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
};

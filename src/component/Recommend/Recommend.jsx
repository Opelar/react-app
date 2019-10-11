import '../../style/recommend.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router';
import Navbars from '../Navbars/Navbars.jsx';
import OuterHeader from '../Headers/OuterHeader.jsx';
import getTime from '../../utils/getTime';

// 搜索最顶端
const Search = () => (
  <div className="home-search">
    <Link to="search">
      <div className="search">
        <div className="icon" />
        <div className="txt">搜索</div>
      </div>
    </Link>
    <div className="fenlei">{/* 分类 */}</div>
  </div>
);

const ReadItem = ({ item }) => (
  <div className="item">
    <div className="title">{item.get('title')} </div>
    <div className="ctime">
      {getTime(new Date(item.get('publishDate')).valueOf())}
    </div>
    <div className="summary">{item.get('summary')}</div>
  </div>
);

export default ({ readHubList, getReadHubHot }) => {
  useEffect(() => {
    getReadHubHot({ fromReadHub: true, pageSize: 20 });
  }, [getReadHubHot]);

  return (
    <div className="recommend-page">
      <Search />
      <OuterHeader title={'热门话题'} />
      <div className="read-list">
        {readHubList.map((item, index) => (
          <ReadItem key={index} item={item} />
        ))}
      </div>
      <Navbars tabIndex={1} />
    </div>
  );
};

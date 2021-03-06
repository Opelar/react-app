import '../../style/articleList.css';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { findDOMNode } from 'react-dom';
import NativeScroll from '../common/NativeScroller';

let st = 0;

const ArticleItem = ({ data }) => (
  <Link to={{ pathname: '/article', query: { id: data.get('id') } }}>
    <div className="article-item">
      <div className="item-content">
        <div className="top">
          来自：
          {data.get('tagName')}
        </div>

        <div className="at-table">
          <div className="cell">
            <h2 className="title">{data.get('title')}</h2>
            <p className="desc">{data.get('desc')}</p>
          </div>
          {data.get('coverImg') ? (
            <div className="cell">
              <img src={data.get('coverImg')} alt="封面图" />
            </div>
          ) : null}
        </div>

        <div className="bottom">
          <div className="author-avatar">
            <img src={data.get('authorAvatar')} alt="avatar" />
          </div>
          <div className="author-name">{data.get('author')}</div>
        </div>
      </div>
    </div>
  </Link>
);

class ArticleGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScroll: false,
      scrollTop: null,
      toBottom: false
    };
  }

  render() {
    const articleList = this.props.articleList;
    return (
      <NativeScroll
        className="swiper-slide animated fadeIn my-scroller"
        ref={n => (this.scroller = n)}
        onTouchMove={this.onTouchMove}
        onScroll={this.onScroll}
        onScrollToBottom={this.onScrollToBottom}
        onScrollToTop={this.onScrollToTop}
      >
        <div className="scroll-anchor" ref={n => (this.scrollAnchor = n)} />
        <div className="article-list">
          {articleList.map((item, index) => (
            <ArticleItem key={index} data={item} />
          ))}
        </div>
      </NativeScroll>
    );
  }

  onScroll = (direction, scrollTop) => {
    this.setState({ scrollTop: scrollTop });
    st = scrollTop;
    if (direction === 'down' && scrollTop <= this.isScrollHeight) {
      this.setState({ isScroll: false });
    }
  };

  onTouchMove = direction => {
    if (direction === 'up') {
      this.setState({ isScroll: true });
    }
  };

  onScrollToTop = () => {
    console.log('refresh 刷新啊刷新啊。。。。。');
  };

  onScrollToBottom = () => {
    let last = this.props.articleList.last();
    let lastId = 0;
    if (last) {
      lastId = last.get('id');
    }
    this.props.getArticle(lastId);
  };

  componentDidMount() {
    if (this.props.articleList.size === 0) {
      this.props.getArticle();
    }

    let articleScrollTop = localStorage.getItem('articleScrollTop');

    if (articleScrollTop === undefined) {
      articleScrollTop = 0;
    }

    findDOMNode(this.scroller).scrollTop = articleScrollTop;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.articleList.size !== this.props.articleList.size) {
      this.scroller.refresh();
    }
  }

  componentWillUnmount() {
    localStorage.setItem('articleScrollTop', st);
  }
}

export default ArticleGroup;

import '../../style/headers.css';
import React, { Component } from 'react';

class ArticleHeader extends Component {
  constructor(props) {
    super();
  }
  render() {
    const goBack = this.props.router.goBack;
    // console.log(this.props.router.goBack);
    let title = this.props.title;
    return (
      <div className="user-header">
        <div className="back close" onClick={() => goBack()} />
        <span>{title}</span>
      </div>
    );
  }
}

export default ArticleHeader;

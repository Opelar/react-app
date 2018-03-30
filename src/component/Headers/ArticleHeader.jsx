import "../../style/headers.css";
import { browserHistory } from "react-router";

import React, { Component } from "react";

class ArticleHeader extends Component {
  constructor(props) {
    super();
  }
  render() {
    // console.log(this.props);
    let title = this.props.title;
    return (
      <div className="user-header">
        <div className="back close" onClick={() => browserHistory.goBack()} />
        <span>{title}</span>
      </div>
    );
  }
}

export default ArticleHeader;

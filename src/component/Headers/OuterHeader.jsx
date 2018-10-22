import '../../style/headers.css';
import React, { Component } from 'react';

class OuterHeader extends Component {
  constructor(props) {
    super();
  }
  render() {
    let title = this.props.title;
    return (
      <div className="user-header">
        <span>{title}</span>
      </div>
    );
  }
}

export default OuterHeader;

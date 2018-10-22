import '../../style/headers.css';
import React, { Component } from 'react';

class EditorHeader extends Component {
  constructor(props) {
    super();
  }
  render() {
    let title = this.props.title;
    return (
      <div className="user-header edit-header">
        <div
          className="back"
          onClick={() => {
            window.history.back();
          }}
        />
        <span>{title}</span>
      </div>
    );
  }
}

export default EditorHeader;

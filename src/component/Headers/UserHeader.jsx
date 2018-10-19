import "../../style/headers.css";
import React, { Component } from "react";

class UserHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let title = this.props.title;
    return (
      <div className="user-header">
        <div className="back" onClick={() => this.props.router.goBack()} />
        <span>{title}</span>
      </div>
    );
  }
}

export default UserHeader;

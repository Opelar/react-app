import "../../style/animate.css";

import React, { Component } from "react";
import classList from "../../utils/classList";

export default class AnimateWrapper extends Component {
  constructor(props) {
    super();
    this.state = {
      status: true
    };
  }

  render() {
    let children = this.props.children;
    console.log(children);

    let status = this.state.stauts;
    return (
      <div
        className={
          !status
            ? "animate-wrapper slideInRight"
            : "animate-wrapper slideOutRight"
        }
      >
        {this.props.children}
      </div>
    );
  }

  // componentDidMount() {
  //   // 首次渲染之前
  //   this.setState({ status: false });
  //   let status = this.state.status;
  //   console.log(status);
  // }

  // componentWillUnmount() {
  //   // 将销毁
  //   this.setState({ status: false });
  //   let status = this.state.status;
  //   console.log(status);
  // }
}

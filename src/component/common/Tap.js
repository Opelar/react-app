import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

export default class Tap extends Component {
  render() {
    let props = Object.assign({}, this.props);
    delete props.component;
    delete props.onTap;

    return React.createElement(
      this.props.component || 'div',
      props,
      this.props.children
    );
  }

  componentDidMount() {
    findDOMNode(this).addEventListener(
      'tap',
      this.props.onTap || this.props.onClick,
      false
    );
  }

  componentWillUnmount() {
    findDOMNode(this).removeEventListener(
      'tap',
      this.props.onTap || this.props.onClick,
      false
    );
  }
}

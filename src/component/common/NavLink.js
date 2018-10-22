import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from '../../utils/classnames';
import Tap from './Tap';

export default class NavLick extends Component {
  render() {
    return (
      <Tap
        component={Link}
        {...this.props}
        onTap={this._onTap}
        className={classNames('mp-nav-link', this.props.className)}
      />
    );
  }
  _onTap() {
    this.context.router.push(this.props.to);
  }
}

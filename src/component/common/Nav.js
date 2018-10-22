import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    let { component = 'div' } = this.props;
    let props = Object.assign({}, this.props);
    props.onClick = this._onTap;
    delete props.component;
    delete props.useReplace;
    delete props.to;

    return React.createElement(component, props, props.children);
  }

  _onTap(e) {
    e.preventDefault();

    if (this.props.onClick) {
      let ret = this.props.onClick(this);
      if (ret instanceof Promise) {
        ret.then(path => this._go(path));
      } else if (ret !== false) {
        this._go(ret);
      }
    } else {
      this._go();
    }
  }

  _go(path) {
    if (path == false) {
      return;
    }
    let router = this.context.router;
    let { useReplace = false, to } = this.props;
    if (path != null) {
      to = path;
    }
    if (useReplace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  }
}

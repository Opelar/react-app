import React, { Component } from "react";
import PropTypes from "prop-types";
import { findDOMNode } from "react-dom";
import { fromJS } from "immutable";

class NativeScroller extends Component {
  // static propTypes = {};

  constructor(props) {
    super();
  }

  getChildContext = () => {
    return {
      addOnScrollEventListener: this._addOnScrollEventListener,
      removeOnScrollEventListener: this._removeOnScrollEventListener
    };
  };

  _addOnScrollEventListener = listener => {
    if (!this.onScrollEventListeners) {
      this.onScrollEventListeners = fromJS([]);
    }
    this.onScrollEventListeners = this.onScrollEventListeners.push(listener);
  };

  _removeOnScrollEventListener = listener => {
    if (this.onScrollEventListeners) {
      this.onScrollEventListeners = this.onScrollEventListeners.filter(
        x => x !== listener
      );
    }
  };

  render() {
    let { component = "div" } = this.props;
    let props = Object.assign({}, this.props, {
      onScroll: this.onScroll,
      onTouchStart: this.onTouchStart,
      onTouchMove: this.onTouchMove
    });
    delete props.component;
    delete props.onScrollToTop;
    delete props.onScrollToBottom;
    delete props.getIsScrollHeight;
    delete props.isScroll;
    delete props.setIsScroll;
    delete props.setIsScrollShow;

    return React.createElement(component, props, props.children);
  }

  componentDidMount() {
    this.contentNode = findDOMNode(this);
    this.touchStartClientY = null;
    this.refresh();
  }

  refresh = () => {
    // console.log("refresh NativeScroll");
    this.scrollTop = this.contentNode.scrollTop;
    this.maxScrollY =
      this.contentNode.scrollHeight - this.contentNode.offsetHeight;
    this.isScrollHeight = this.props.getIsScrollHeight
      ? this.props.getIsScrollHeight()
      : null;
  };

  onScroll = event => {
    let scrollTop = event.target.scrollTop;
    let direction = scrollTop > this.scrollTop ? "up" : "down";
    this.scrollTop = scrollTop;
    this._onScroll(direction);
  };

  onScrollToTop = () => {
    if (this.props.onScrollToTop) {
      this.props.onScrollToTop();
    }
  };

  onScrollToBottom = () => {
    // console.log("scroll to bottom!");
    if (this.props.onScrollToBottom) {
      this.props.onScrollToBottom();
    }
  };

  setIsScroll = () => {
    if (this.props.setIsScroll) {
      // console.log("setIsScroll");
      this.props.setIsScroll(true);
    }
  };

  unsetIsScroll = () => {
    if (this.props.setIsScroll) {
      // console.log("unsetIsScroll");
      this.props.setIsScroll(false);
    }
  };

  setIsScrollShow = () => {
    if (this.props.setIsScrollShow) {
      // console.log("setIsScrollShow");
      this.props.setIsScrollShow(true);
    }
  };

  unsetIsScrollShow = () => {
    if (this.props.setIsScrollShow) {
      // console.log("unsetIsScrollShow");
      this.props.setIsScrollShow(false);
    }
  };

  _onScroll = direction => {
    // console.log("onscroll:", {
    //   direction,
    //   top: this.scrollTop,
    //   maxScrollY: this.maxScrollY,
    //   isScrollHeight: this.isScrollHeight
    // });

    if (this.props.onScroll) {
      this.props.onScroll(direction, this.scrollTop);
    }

    if (this.onScrollEventListeners) {
      this.onScrollEventListeners.forEach(fn => fn(direction, this.scrollTop));
    }

    if (direction === "down" && this.scrollTop === 0) {
      this.onScrollToTop();
      // console.log("到顶了");
    }

    if (direction === "up" && this.scrollTop >= this.maxScrollY - 2) {
      this.onScrollToBottom();
    }

    if (this.isScrollHeight != null) {
      if (direction === "up" && this.scrollTop >= this.isScrollHeight) {
        this.setIsScroll();
        this.setIsScrollShow();
      } else if (direction === "down" && this.scrollTop < this.isScrollHeight) {
        this.unsetIsScroll();
        this.unsetIsScrollShow();
      }
    }

    if (direction === "up" && this.props.isScroll && this.props.isScroll()) {
      this.setIsScrollShow();
    }
  };

  onTouchStart = event => {
    this.touchStartClientY = event.touches[0].clientY;
  };

  onTouchMove = event => {
    var y = event.changedTouches[0].clientY;
    let direction = this.touchStartClientY > y ? "up" : "down";
    // console.log("ontouchmove, direction:", direction);

    if (this.props.onTouchMove) {
      this.props.onTouchMove(direction);
    }

    if (this.props.isScroll && this.props.isScroll()) {
      if (direction === "down") {
        this.unsetIsScrollShow();
      }
    }
    // console.log("unsetIsScroll");
    // if (this.props.setIsScroll) this.props.setIsScroll(false);
  };
}

NativeScroller.getElementTop = function(element) {
  return (
    element.offsetTop + parseFloat(window.getComputedStyle(element).marginTop)
  );
};

NativeScroller.childContextTypes = {
  addOnScrollEventListener: PropTypes.func,
  removeOnScrollEventListener: PropTypes.func
};

export default NativeScroller;

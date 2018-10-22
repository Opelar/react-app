import React, { Component } from 'react';
import { Link } from 'react-router';
import classList from '../../utils/classList';

class Navbars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  render() {
    // console.log(this.props);
    let tabIndex = this.props.tabIndex;

    return (
      <div className="navbars fine-border-top">
        <div
          className={classList('navitem item1', { rootActive: tabIndex === 0 })}
        >
          <Link to="/" />
          {/* <div className="navtext">首页</div> */}
        </div>

        <div
          className={classList('navitem item2', { rootActive: tabIndex === 1 })}
        >
          <Link to="/recommend" />
          {/* <div className="navtext">推荐</div> */}
        </div>

        <div
          className={classList('navitem item3', { rootActive: tabIndex === 2 })}
        >
          <Link to="/circle" />
          {/* <div className="navtext">小圈</div> */}
        </div>

        <div
          className={classList('navitem item4', { rootActive: tabIndex === 3 })}
        >
          <Link to="/personal" />
          {/* <div className="navtext">我的</div> */}
        </div>
      </div>
    );
  }
}

export default Navbars;

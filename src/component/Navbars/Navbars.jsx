import React from 'react';
import { Link } from 'react-router';
import classList from '../../utils/classList';

export default ({ tabIndex }) => {
  return (
    <div className="navbars fine-border-top">
      <div
        className={classList('navitem item1', { rootActive: tabIndex === 0 })}
      >
        <Link to="/" />
      </div>

      <div
        className={classList('navitem item2', { rootActive: tabIndex === 1 })}
      >
        <Link to="/recommend" />
      </div>

      <div
        className={classList('navitem item3', { rootActive: tabIndex === 2 })}
      >
        <Link to="/circle" />
      </div>

      <div
        className={classList('navitem item4', { rootActive: tabIndex === 3 })}
      >
        <Link to="/personal" />
        {/* <div className="navtext">我的</div> */}
      </div>
    </div>
  );
};

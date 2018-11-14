import '../../style/animate.css';
import React, { useState } from 'react';

export default props => {
  const [status, setStatus] = useState(true);

  return (
    <div
      className={
        !status
          ? 'animate-wrapper slideInRight'
          : 'animate-wrapper slideOutRight'
      }
    >
      {props.children}
    </div>
  );
};

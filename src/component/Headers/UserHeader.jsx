import '../../style/headers.css';
import React from 'react';

export default ({ title, router }) => (
  <div className="user-header">
    <div className="back" onClick={() => router.goBack()} />
    <span>{title}</span>
  </div>
);

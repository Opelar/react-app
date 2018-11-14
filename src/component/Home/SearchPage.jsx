import '../../style/search.css';
import React, { useState } from 'react';

export default ({ router }) => {
  const [searchText, setSearchText] = useState('');
  return (
    <div className="search-page">
      <div className="search-header">
        <div className="back" onClick={() => router.goBack()} />
        <div className="right">
          <input
            className="search-input"
            type="text"
            placeholder="搜索"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

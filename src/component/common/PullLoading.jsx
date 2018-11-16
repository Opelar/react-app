import React from 'react';

export default ({ isFetching, loaded }) => (
  <div className="my-pull-loading">
    <div className="loading">
      {isFetching && <img src="/image/loading2.svg" alt="loading" />}
      {isFetching ? '加载中...' : loaded ? '' : '上拉加载...'}
    </div>
  </div>
);

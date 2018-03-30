import React from "react";

const PullLoading = ({ isFetching, loaded }) => {
  return (
    <div className="my-pull-loading">
      <div className="loading">
        {isFetching && <img src="/image/loading2.svg" alt="loading" />}
        {isFetching ? "加载中..." : loaded ? "" : "上拉加载..."}
      </div>
    </div>
  );
};

export default PullLoading;

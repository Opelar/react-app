import React from "react";
import classList from "../../utils/classList";

const Toast = ({ show, iconClass, text }) => {
  return (
    <div className={classList("toast-wrapper", { "my-hidden": !show })}>
      {iconClass === "toast-loading" ? (
        <div className="my_loading">
          <div className="pswp__preloader__icn">
            <div className="pswp__preloader__cut">
              <div className="pswp__preloader__donut" />
            </div>
          </div>
        </div>
      ) : (
        <div className="my-toast">
          <i className={classList("my-toast-icon", iconClass)} />
          <div className="my-toast-content">{text}</div>
        </div>
      )}
    </div>
  );
};

export default Toast;

import { Route, IndexRoute } from "react-router";
import setTitle from "./setTitle";
import React from "react";

export default function createRoute(props, isIndex = false) {
  let onEnter = props.onEnter;
  let title = props.title;

  props.onEnter = function(nextState, replace) {
    if (onEnter) {
      onEnter.apply(this, arguments);
    }
    if (title) {
      setTitle(title);
    }
  };

  return isIndex ? <IndexRoute {...props} /> : <Route {...props} />;
}

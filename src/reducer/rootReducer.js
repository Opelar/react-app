import { combineReducers } from "redux-immutablejs";
import InvokeServiceReducer from "./invokeServiceReducer";
import toast from "./toastReducer";
import {
  articleListReducer,
  imgListReducer,
  videoListReducer
} from "./homeReducer";
import { articleDetailsReducer } from "./articleDetailsReducer";

let rootReducer = combineReducers({
  toast,
  invokeService: InvokeServiceReducer,
  articleList: articleListReducer,
  imgList: imgListReducer,
  videoList: videoListReducer,
  articleDetails: articleDetailsReducer
});

function toJS(x) {
  if (x != null) {
    return x.toJS ? x.toJS() : x;
  } else {
    return x;
  }
}

export default (state, action) => {
  // console.log("reduce, action: ", {
  //   type: action.type,
  //   payload: toJS(action.payload)
  // });
  // console.log(state);
  // console.log("old state:", toJS(state));
  let newState = rootReducer(state, action);
  // console.log("new state:", toJS(newState));
  return newState;
};

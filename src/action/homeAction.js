import action from "../utils/action";
import {
  getArticleGroupService,
  getImgGroupService,
  getVideoGroupService
} from "../service/homeService";
import { showError } from "../utils/toast";

export const GET_ARTICLE_GROUP_OK = "GET_ARTICLE_GROUP_OK";
export const GET_ARTICLE_GROUP_FAIL = "GET_ARTICLE_GROUP_FAIL";

export const GET_IMG_GROUP_OK = "GET_IMG_GROUP_OK";
export const GET_IMG_GROUP_FAIL = "GET_IMG_GROUP_FAIL";

export const GET_VIDEO_GROUP_OK = "GET_VIDEO_GROUP_OK";
export const GET_VIDEO_GROUP_FAIL = "GET_VIDEO_GROUP_FAIL";

export function getArticleGroup() {
  return function(dispatch) {
    return getArticleGroupService
      .invoke({}, dispatch)
      .then(res => dispatch(action(GET_ARTICLE_GROUP_OK, res)))
      .catch(err => {
        console.log(err)
        showError(err.msg);
        dispatch(action(GET_ARTICLE_GROUP_FAIL, err));
      });
  };
}

export function getImgGroup() {
  return function(dispatch) {
    return getImgGroupService
      .invoke({}, dispatch)
      .then(res => dispatch(action(GET_IMG_GROUP_OK, res)))
      .catch(err => {
        showError(err.msg);
        dispatch(action(GET_IMG_GROUP_FAIL, err));
      });
  };
}

export function getVideoGroup() {
  return function(dispatch) {
    return getVideoGroupService
      .invoke({}, dispatch)
      .then(res => dispatch(action(GET_VIDEO_GROUP_OK, res)))
      .catch(err => {
        showError(err.msg);
        dispatch(action(GET_VIDEO_GROUP_FAIL, err));
      });
  };
}

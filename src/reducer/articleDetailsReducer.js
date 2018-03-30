import { fromJS } from "immutable";
import { createReducer } from "redux-immutablejs";
import { GET_ARTICLE_DETAILS_OK } from "../action/articleDetailsAction";

const initialState = fromJS({});

export const articleDetailsReducer = createReducer(initialState, {
  [GET_ARTICLE_DETAILS_OK]: (state, action) => action.payload.get("data")
});

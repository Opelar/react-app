import { fromJS } from "immutable";

export default function action(type, payload) {
  let error = payload instanceof Error;

  return {
    type: type,
    payload: error ? payload : payload && fromJS(payload),
    error
  };
}

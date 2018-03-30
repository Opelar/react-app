import action from "../utils/action";
import { showLoading, showError } from "../utils/toast";

export const START_INVOKE = "START_INVOKE";
export const INVOKE_OK = "INVOKE_OK";
export const INVOKE_ERROR = "INVOKE_ERROR";

let loadingToast;

export function startInvoke(request, useToast = true) {
  let method = request.get("method");
  if (useToast) {
    let message = method === "GET" ? "正在加载" : "正在处理";
    loadingToast = showLoading(message);
  }
  return action(START_INVOKE, { request });
}

export function invokeOK(response, useToast = true) {
  if (useToast && loadingToast) {
    loadingToast.hide();
    loadingToast = null;
  }

  return action(INVOKE_OK, response);
}

export function invokeError(error, useToast = true) {
  if (useToast && loadingToast) {
    loadingToast.hide();
    loadingToast = null;
  }
  showError(error.message);
  return action(INVOKE_ERROR, { error });
}

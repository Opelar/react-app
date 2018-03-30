import { defineService } from "../utils/service";

export const loginService = defineService({
  method: "POST",
  path: "/login"
});
export const registerService = defineService({
  method: "POST",
  path: "/register"
});
export const resetPasswordService = defineService({
  method: "POST",
  path: "/resetpassword"
});

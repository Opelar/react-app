import { defineService } from "../utils/service";

export const getArticleDetailsService = defineService({
  method: "GET",
  path: "/articledetails"
});

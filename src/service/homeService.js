import { defineService } from "../utils/service";

export const getArticleGroupService = defineService({
  method: "GET",
  path: "/home/articlegroup"
});

export const getImgGroupService = defineService({
  method: "GET",
  path: "/home/imggroup"
});
export const getVideoGroupService = defineService({
  method: "GET",
  path: "/home/videogroup"
});

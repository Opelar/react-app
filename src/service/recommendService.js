import { defineService } from "../utils/service";

// readhub
export const getReadHubService = defineService({
  method: "GET",
  path: "/topic"
});

import { defineService } from '../utils/service';

export const loginService = defineService({
  method: 'POST',
  path: '/login'
});

export const registerService = defineService({
  method: 'POST',
  path: '/register'
});

export const resetPasswordService = defineService({
  method: 'POST',
  path: '/resetpassword'
});

export const getArticleGroupService = defineService({
  method: 'GET',
  path: '/home/articlegroup'
});

export const getImgGroupService = defineService({
  method: 'GET',
  path: '/home/imggroup'
});

export const getVideoGroupService = defineService({
  method: 'GET',
  path: '/home/videogroup'
});

export const getArticleDetailsService = defineService({
  method: 'GET',
  path: '/articledetails'
});

export const getReadHubService = defineService({
  method: 'GET',
  path: '/topic'
});

import action from '../utils/action';
import { getArticleDetailsService } from '../service/index';
import { showError } from '../utils/toast';

export const GET_ARTICLE_DETAILS_OK = 'GET_ARTICLE_DETAILS_OK';
export const GET_ARTICLE_DETAILS_FAIL = 'GET_ARTICLE_DETAILS_FAIL';

export const getArticleDetails = id => dispatch =>
  getArticleDetailsService
    .invoke({ id }, dispatch)
    .then(res => dispatch(action(GET_ARTICLE_DETAILS_OK, res)))
    .catch(err => {
      showError(err.msg);
      dispatch(action(GET_ARTICLE_DETAILS_FAIL, err));
    });

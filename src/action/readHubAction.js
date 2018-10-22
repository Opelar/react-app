import action from '../utils/action';
import { getReadHubService } from '../service/index';
import { showError } from '../utils/toast';

export const GET_READHUB_OK = 'GET_READHUB_OK';
export const GET_READHUB_FAIL = 'GET_READHUB_FAIL';

export const getReadHub = ({ fromReadHub, pageSize }) => dispatch =>
  getReadHubService
    .invoke({ fromReadHub, pageSize }, dispatch)
    .then(res => dispatch(action(GET_READHUB_OK, res)))
    .catch(err => {
      console.log(err);
      showError(err.msg);
      dispatch(action(GET_READHUB_FAIL, err));
    });

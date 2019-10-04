import { Dispatch } from 'redux';
import { AxiosPromise } from 'axios';

interface FetchAction {
  type: string;
  request: AxiosPromise;
  payload?: any;
}

export const requestApiMiddleware = () => (next: Dispatch) => async (
  action: FetchAction
) => {
  if (action.request) {
    next({ type: `${action.type}_REQUEST`,});
    let modAction;
    try {
      const {data} = await action.request;
      modAction = {
        ...action,
        type: `${action.type}_SUCCESS`,
        payload: data,
      };
    } catch (error) {
      modAction = {
        ...action,
        type: `${action.type}_FAILURE`,
        payload: error.response.data,
      };

    }
    return next(modAction);
  }

  return next(action);
};

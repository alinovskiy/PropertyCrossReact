import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import { initialStore, rootReducer } from '@app/store/root/reducer';
import { requestApiMiddleware } from '@app/middlewares/requesApiMiddleware';

export const store = createStore(
  rootReducer,
  initialStore,
  applyMiddleware(requestApiMiddleware, logger)
);

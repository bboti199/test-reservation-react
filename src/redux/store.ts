import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import { rootReducer } from './rootReducer';

const loggerMiddleware = createLogger();
export const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root.reducer';
import rootSaga from './root.saga';
import createSagaMiddleware from 'redux-saga';

const sagaMidleware = createSagaMiddleware();
const middleware = [sagaMidleware];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMidleware.run(rootSaga);
export default store;

/**
 * for now I design like follows:
 * different task downloading state belong to different state. Downloading, finished, waiting, stopped, and failed.
 * for beta version, I just would impl active, stopped, waitting, just as aria defined.
 *
 * I do not know whether or when aria2 restart its session would send its events, is it possibale to like:
 * addeventA event1 event2 addeventB event3?
 * So it would use only once to get current state and then deal to each event. Like init.
 * And each state only record its gid. ??(or maybe we sould always to update the info) the cache would be used to visit its static messages, such as path.
 * The download page itself would update downloading task states, such as speed, so they have the same time to update for each task.
 */

import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from './reducers';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  return {
    ...createStore(reducers, initialState, composedEnhancers),
    // eslint-disable-next-line @typescript-eslint/unbound-method
    runSaga: sagaMiddleware.run,
  };
}

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { poiReducer } from './poiReducer';
import { uiReducer } from './uiReducer';

const reducer = combineReducers({
  poiList: poiReducer,
  ui: uiReducer
});

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

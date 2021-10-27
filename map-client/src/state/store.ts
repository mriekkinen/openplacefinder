import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { poiReducer } from './poiReducer';
import { uiReducer } from './uiReducer';
import { searchReducer } from './searchReducer';
import { locationReducer } from './locationReducer';
import { facetReducer } from './facetReducer';

const reducer = combineReducers({
  poiList: poiReducer,
  ui: uiReducer,
  search: searchReducer,
  location: locationReducer,
  facets: facetReducer
});

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

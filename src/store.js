import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

// Combine Reducers
const mergedReducers = {
  ...reducers,
};

const initialState = {};

// TODO remove devtool in prod
const store = createStore(
  combineReducers(mergedReducers),
  initialState,
  composeWithDevTools(),
);

export default store;

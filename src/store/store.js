/* eslint-disable prettier/prettier */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from './';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  export default store;
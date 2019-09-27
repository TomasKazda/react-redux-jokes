import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import * as NamesReducer from './Names';

export const BACKEND_URL = "https://api.abalin.net/get/";

export default function configureStore () {

  const middleware = [];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];

  const rootReducer = () => combineReducers({
    names: NamesReducer.reducer
  });

  return createStore(
    rootReducer(),
    {},
    compose(applyMiddleware(...middleware), ...enhancers)
  );
}
import { combineReducers, createStore } from 'redux';
import { commentReducer } from './reducers/commentReducer';
import { imgCarReducer } from './reducers/imgCarReducer';
import { numberReducer } from './reducers/numberReducer';
import burgerReducer from './reducers/burgerReducer';

const rootReducer = combineReducers({
  //nơi chứa các state của ứng dụng
  number: numberReducer,
  imgCar: imgCarReducer,
  commentReducer: commentReducer,
  burgerReducer: burgerReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

import { combineReducers } from 'redux';
import { GioHangReducer } from './GioHangReducer';
import FakeBookreducer from './FakeBookreducer';

//store tổng ứng dụng
export const rootReducer = combineReducers({
  //nơi sẽ chứa các reducer cho nghiệp vụ (store con)
  GioHangReducer: GioHangReducer,
  FakeBookreducer,
});

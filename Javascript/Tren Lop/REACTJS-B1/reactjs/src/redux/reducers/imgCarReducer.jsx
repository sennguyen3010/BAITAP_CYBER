const stateDefault = './img/products/black-car.jpg';

export const imgCarReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR': {
      //b1: lấy dữ liệu gửi lên từ action
      const { payload } = action;
      //b2: xử lý thay đổi state
      state = payload;
      return state;
    }
    default:
      return state;
  }
};

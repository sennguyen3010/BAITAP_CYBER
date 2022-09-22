const stateDefault = 10;

export const numberReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'TANG_SL': {
      //b1: lấy giá trị payload từ action gửi lên
      const { payload } = action;
      //b2: thay đổi state (this.setState)
      state += payload;
      //b3: return về state mới
      return state;
    }
  }
  return state;
};

const stateDefault = {
  commentInfo: {
    name: '',
    content: '',
  },
  arrComment: [
    { name: 'nguyễn văn a', content: 'like like like' },
    { name: 'nguyễn văn b', content: 'like like like' },
    { name: 'nguyễn văn c', content: 'hehe hehe' },
  ],
};

export const commentReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'HANDLE_CHANGE': {
      //b1: lấy dữ liệu từ action gửi lên
      const { id, value } = action.payload;
      // b2: đối với state là obj or arr => clone state ra
      let commentInfoUpdate = { ...state.commentInfo };
      //b3: thay đổi state
      commentInfoUpdate[id] = value;
      //b4: gán state cũ = state mới
      state.commentInfo = commentInfoUpdate;
      return { ...state }; // immutable (tính bất biến)
    }
    case 'HANDLE_SUBMIT': {
      let comment = action.payload;
      let arrCommentUpdate = [...state.arrComment];
      arrCommentUpdate.push(comment);
      //cập nhật state
      state.arrComment = arrCommentUpdate;
      console.log('arrComment', state.arrComment);
      return { ...state };
    }
    case 'DELETE_COMMENT': {
      let index = action.payload;

      let arrCommentUpdate = [...state.arrComment];
      arrCommentUpdate.splice(index, 1);
      state.arrComment = arrCommentUpdate;
      return { ...state };
    }
    case 'EDIT_COMMENT': {
      let index = action.payload;
      let commentInfoUpdate = { ...state.commentInfo };
      commentInfoUpdate = state.arrComment[index];
      state.commentInfo = commentInfoUpdate;
      return { ...state };
    }
    case 'UPDATE_COMMENT': {
      let arrCommentUpdate = [...state.arrComment];
      //tìm comment có name và nội dung trong mảng
      let cmt = arrCommentUpdate.find(
        (comment) => comment.name === state.commentInfo.name
      );
      if (cmt) {
        cmt.content = state.commentInfo.content;
      }
      //cap nhat state
      state.arrComment = arrCommentUpdate;
      return { ...state };
    }
    default:
      return state;
  }
};

// khởi tạo giá trị ban đầu của store
const stateGioHang = {
  gioHang: [
    {
      maSP: 1,
      tenSP: 'IPhone',
      hinhAnh: './img/sp_vivo850.png',
      soLuong: 1,
      giaBan: 1000,
      thanhTien: 1000,
    },
  ],
};

export const GioHangReducer = (state = stateGioHang, action) => {
  // console.log('reducer', action);
  switch (action.type) {
    case 'THEM_GIO_HANG': {
      //xử lý logic thêm giỏ hàng
      let gioHangCapNhat = [...state.gioHang];
      let index = gioHangCapNhat.findIndex(
        (spGH) => spGH.maSP === action.spGioHang.maSP
      );
      if (index !== -1) {
        gioHangCapNhat[index].soLuong += 1;
      } else {
        gioHangCapNhat.push(action.spGioHang);
      }
      state.gioHang = gioHangCapNhat;

      return { ...state };
    }
    case 'XOA_GIO_HANG': {
      let gioHangCapNhat = [...state.gioHang];
      gioHangCapNhat.splice(action.index, 1);
      //gán giỏ hàng mới cho state.gioHang => render lại giao diện
      state.gioHang = gioHangCapNhat;
      // return [...state];
    }
    case 'TANG_GIAM_SL': {
      const { index, tangGiam } = action;
      // console.log(action);
      let gioHangCapNhat = [...state.gioHang];
      if (tangGiam) {
        gioHangCapNhat[index].soLuong += 1;
      } else {
        if (gioHangCapNhat[index].soLuong > 1) {
          gioHangCapNhat[index].soLuong -= 1;
        }
      }
      //cập nhật lại state của GioHangReducer
      state.gioHang = gioHangCapNhat;
    }
  }
  return { ...state };
};

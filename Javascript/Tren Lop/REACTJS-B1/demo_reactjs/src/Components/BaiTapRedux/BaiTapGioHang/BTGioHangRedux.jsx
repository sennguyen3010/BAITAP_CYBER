import React, { Component } from 'react';
import DanhSachSanPham from './DanhSachSanPham';
import ModalGioHang from './ModalGioHang';

export default class BTGioHangRedux extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-danger text-center">Bài tập giỏ hàng redux</h3>
        <ModalGioHang />
        <DanhSachSanPham />
      </div>
    );
  }
}

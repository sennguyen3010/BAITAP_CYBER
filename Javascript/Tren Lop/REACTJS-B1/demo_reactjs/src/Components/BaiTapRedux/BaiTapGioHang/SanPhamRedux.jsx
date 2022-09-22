import React, { Component } from 'react';
import { connect } from 'react-redux';

class SanPhamRedux extends Component {
  render() {
    const { sanPham } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={sanPham.hinhAnh} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan}</p>
          <button
            onClick={() => {
              this.props.themGioHang(sanPham);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

//xây dựng hàm tạo ra props là hàm xử lý sự kiện = > đưa dữ liệu lên store
const mapDispatchToProps = (dispatch) => {
  return {
    //tạo ra props component (là function => đưa dữ liệu lên store)
    themGioHang: (sanPham) => {
      const spGioHang = {
        maSP: sanPham.maSP,
        tenSP: sanPham.tenSP,
        giaBan: sanPham.giaBan,
        soLuong: 1,
        hinhAnh: sanPham.hinhAnh,
      };
      //tạo action đưa dữ liệu lên reducer
      const action = {
        type: 'THEM_GIO_HANG', // bắt buộc đặt type
        spGioHang: spGioHang, // nội dung gửi lên reducer
      };
      console.log(action);
      //dùng hàm dispatch đưa dữ liệu action lên reducer
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(SanPhamRedux);

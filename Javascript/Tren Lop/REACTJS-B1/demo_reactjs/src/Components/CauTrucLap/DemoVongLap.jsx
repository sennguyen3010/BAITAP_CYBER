import React, { Component } from 'react';

export default class DemoVongLap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangSanPham: [
        { maSP: 1, tenSanPham: 'Iphone x', gia: 1000 },
        { maSP: 2, tenSanPham: 'samsung', gia: 2000 },
        { maSP: 3, tenSanPham: 'huawei', gia: 3000 },
      ],
    };
  }

  renderSanPham = () => {
    let contentTable = [];

    for (let i = 0; i < this.state.mangSanPham.length; i++) {
      const sanPham = this.state.mangSanPham[i];
      contentTable.push(
        <tr key={i}>
          <td>{sanPham.maSP}</td>
          <td>{sanPham.tenSanPham}</td>
          <td>{sanPham.gia}</td>
        </tr>
      );
    }
    return contentTable;
  };

  render() {
    return (
      <div className="container">
        <h3 className="bg-dark p-5 text-white text-center">Demo vòng lặp</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Giá sản phẩm</th>
            </tr>
          </thead>
          <tbody>{this.renderSanPham()}</tbody>
        </table>
      </div>
    );
  }
}

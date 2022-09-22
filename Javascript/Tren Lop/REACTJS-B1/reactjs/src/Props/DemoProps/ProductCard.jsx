import React, { Component } from 'react';

export default class ProductCard extends Component {
  render() {
    //this.props: thuộc tính có sẵn của react class component dùng để nhận giá trị từ component cha truyền vào
    /**
     * so sánh: state & props
     * giống nhau: đều là thuộc tính có sẵn của react class component dùng để binding dữ liệu ra giao diện
     * khác nhau: state có thể gán lại gtri trông qua phương thức setState, props ko thể gán
     * lại giá trị (readonly) dùng để nhận giá trị từ component cha truyền vào
     *
     * optional chaining: ? => nếu có thì làm ko có giá trị thì bỏ qua
     */

    const { item } = this.props;

    return (
      <div className="card">
        <img src={`https://i.pravatar.cc?u=${item?.age}`} alt="..." />
        <div className="card-body">
          <p>Name: {item?.name} </p>
          <p>Age: {item?.age} </p>
        </div>
      </div>
    );
  }
}

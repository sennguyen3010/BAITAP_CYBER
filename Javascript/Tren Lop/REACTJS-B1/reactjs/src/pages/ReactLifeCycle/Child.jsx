import React, { Component, PureComponent } from 'react';

/**
 PureComponent là component không có lifecycle shouldComponentUpdate
 tuy nhiên ở PureComponent đã hỗ trợ việc xử lý render khi Props thay đổi và 
 không render khi Props không thay đổi.
 Lưu ý:
  so sánh props ở đây chỉ là dạng shallow compare - nhận biết dc (primitive value):
  number, string, boolean, undefined ...
  đối với reference value thì khi cập nhật state ở component cha phải sử dụng {...spread operator}
 */

export default class Child extends PureComponent {
  constructor(props) {
    console.log('constructor child');

    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log('getDerivedStateFromProps child');
    return null;
  }

  //   shouldComponentUpdate(newProps, newState) {
  //     //newProps: là props mới trước khi render
  //     //this.props: là props hiện tại
  //     if (this.props.number !== newProps.number) {
  //       console.log('shouldComponentUpdate child');
  //       return true;
  //     }
  //     // console.log('shouldComponentUpdate child');
  //     return false;
  //   }
  render() {
    console.log('render child');

    return (
      <div className="container">
        <div className="p-5 display-4 bg-dark">
          <h2 className="text-white">
            Child component: {this.props.obNumber.number}
          </h2>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log('componentdidmount child');
  }

  componentDidUpdate(prevProps, prevState) {}
}

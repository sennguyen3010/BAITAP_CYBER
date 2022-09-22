import React, { Component } from 'react';

export default class DemoIf extends Component {
  constructor(props) {
    super(props);
    //this.state là thuộc tính có sẵn của component , chứa các thuộc tính có khả năng thay đổi bởi 1 sự kiện nào đó của component
    //this.setState là phương thức bất đồng bộ (nó sẽ tính toán và trong thgian tính toán nó sẽ thực hiện tiếp các dòng lệnh bên dưới chứ k chờ)
    this.state = {
      //thộc tính
      isLogin: false,
      userName: '',
    };
  }

  login = () => {
    this.setState({
      isLogin: true,
      userName: 'hihi Beo',
    });
  };

  logout = () => {
    this.setState({
      isLogin: false,
      userName: '',
    });
    // console.log(this.state);
  };

  //phương thức render của component DemoIf
  render() {
    return (
      <div>
        {/* {this.renderContent()} */}
        {this.state.isLogin ? (
          <div>
            Hello {this.userName} <button onClick={this.logout}>Logout</button>
          </div>
        ) : (
          <button onClick={this.login}>Login</button>
        )}
      </div>
    );
  }

  // cách 1: dùng phương thức kết hợp if để xác định nội dung đã đăng nhập

  //   renderContent = () => {
  //     if (this.isLogin) {
  //       //isLogin ===true => nguoi dung da dang nhap

  //       this.userName = 'Beo 123';
  //       return (
  //         <div>
  //           Hello {this.userName} <button>Logout</button>
  //         </div>
  //       );
  //     }
  //     return (
  //       <div>
  //         <button>Login</button>
  //       </div>
  //     );
  //   };
}

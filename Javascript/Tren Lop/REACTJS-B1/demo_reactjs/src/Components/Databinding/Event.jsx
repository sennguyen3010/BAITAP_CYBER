import React, { Component } from 'react';

export default class Event extends Component {
  //phương thức xử lý cho nút click
  handleShowMessage = (message) => {
    alert(message);
  };
  render() {
    let message = 'hello Beo 123';
    return (
      <div className="container">
        {/* <button onClick={this.handleShowMessage.bind(this, message)}>
          Show message
        </button> */}
        <button onClick={() => this.handleShowMessage(message)}>
          Show message
        </button>
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class HandleEvent extends Component {
  handleClick = (e) => {
    alert('hello cybersoft');
  };

  showMess = (name) => {
    alert(`hello ${name}`);
  };

  render() {
    return (
      <div className="container">
        <button
          id="btnClick"
          onClick={(e) => {
            alert('hello cybersoft');
          }}
        >
          Click me
        </button>
        <button className="btn btn-primary ml-2" onClick={this.handleClick}>
          click
        </button>
        <hr />
        <h3>Handle click params</h3>
        <button
          onClick={(e) => {
            //gọi các hàm khác thực thi khi click
            this.showMess('Sen!!!');
          }}
        >
          Show mess
        </button>

        <button
          className="btn btn-primary ml-2"
          onClick={this.showMess.bind(this, 'Beo!!!')}
        >
          click
        </button>
      </div>
    );
  }
}

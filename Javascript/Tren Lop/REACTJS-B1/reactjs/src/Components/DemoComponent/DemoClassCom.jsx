//rcc: react class component

import React, { Component } from 'react';

export default class DemoClassCom extends Component {
  //render: là phương thức mặc định xác định giao diện của thẻ <DemoClassCom />
  render() {
    return (
      <div>
        <div className="card text-white bg-secondary">
          <img className="card-img-top" src="holder.js/100px180/" alt="Title" />
          <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Text</p>
          </div>
        </div>
      </div>
    );
  }
}

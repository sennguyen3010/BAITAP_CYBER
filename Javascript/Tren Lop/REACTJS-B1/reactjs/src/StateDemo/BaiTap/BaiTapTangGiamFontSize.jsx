import React, { Component } from 'react';

export default class BaiTapTangGiamFontSize extends Component {
  state = {
    fSize: 16, //default 16px
  };

  render() {
    return (
      <div className="container">
        <h3>Bài tập tăng giảm fontSize</h3>
        <p style={{ fontSize: this.state.fSize + 'px' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illum sit
          incidunt. Porro, sunt? Cupiditate reiciendis deleniti sed at sapiente
          sequi delectus assumenda! Omnis officiis distinctio adipisci possimus
          voluptas autem.
        </p>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            this.setState({
              fSize: this.state.fSize + 5,
            });
          }}
        >
          +
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            this.setState({
              fSize: this.state.fSize - 5,
            });
          }}
        >
          -
        </button>
      </div>
    );
  }
}

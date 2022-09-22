import React, { Component } from 'react';

export default class ItemProduct extends Component {
  render() {
    let { product, viewDetail } = this.props;
    return (
      <div className="card">
        <img src={product.img} className="w-100" alt="..." />
        <div className="card-body">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              viewDetail(product);
            }}
            data-bs-toggle="modal"
            data-bs-target="#modelId"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}

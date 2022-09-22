import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    const { shoes } = this.props;

    return (
      <div className="card">
        <img src={shoes.image} alt="..." />
        <div className="card-body">
          <h3>{shoes.name}</h3>
          <p>{shoes.price} $</p>
          <button className="btn btn-dark text-white">Add to carts</button>
        </div>
      </div>
    );
  }
}

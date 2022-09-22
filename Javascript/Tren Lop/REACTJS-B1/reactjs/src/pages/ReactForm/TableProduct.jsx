import React, { Component } from 'react';

export default class TableProduct extends Component {
  render() {
    let { arrProduct, delProduct, editProduct } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>img</th>
            <th>name</th>
            <th>price</th>
            <th>type</th>
            <th>description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {arrProduct.map((pro, index) => {
            return (
              <tr key={index}>
                <td>{pro.id}</td>
                <td>
                  <img src={pro.img} alt="..." width={50} />
                </td>
                <td>{pro.name}</td>
                <td>{pro.price}</td>
                <td>{pro.type}</td>
                <td>{pro.description}</td>
                <td>
                  <button
                    onClick={() => {
                      delProduct(pro.id);
                    }}
                    className="btn btn-danger mx-2"
                  >
                    Del
                  </button>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      editProduct(pro);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

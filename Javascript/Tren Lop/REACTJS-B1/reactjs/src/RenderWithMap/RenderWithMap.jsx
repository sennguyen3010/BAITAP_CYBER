import React, { Component } from 'react';

const data = [
  { id: 1, name: 'Red Car', price: 1000, img: './img/products/red-car.jpg' },
  {
    id: 2,
    name: 'Black Car',
    price: 1000,
    img: './img/products/black-car.jpg',
  },
  {
    id: 1,
    name: 'Silver Car',
    price: 1000,
    img: './img/products/silver-car.jpg',
  },
  {
    id: 1,
    name: 'Steel Car',
    price: 1000,
    img: './img/products/steel-car.jpg',
  },
];

export default class RenderWithMap extends Component {
  renderProduct = () => {
    //output: [<tr></tr>, <tr></tr>]
    // const arrTrJSX = [];
    // for (let index = 0; index < data.length; index++) {
    //   let prod = data[index];
    //   let tr = (
    //     <tr>
    //       <td>{prod.id}</td>
    //       <td>{prod.name}</td>
    //       <td>{prod.price}</td>
    //       <td>
    //         <img src={prod.img} width={50} alt="..." />
    //       </td>
    //     </tr>
    //   );
    //   //đưa vào mảng arrTrJSX
    //   arrTrJSX.push(tr);
    // }
    // return arrTrJSX;

    //cach 2: dung map
    return data.map((prod, index) => {
      return (
        <tr key={index}>
          <td>{prod.id}</td>
          <td>{prod.name}</td>
          <td>{prod.price}</td>
          <td>
            <img src={prod.img} width={50} alt="..." />
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3>Render table product</h3>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
            </tr>
          </thead>
          <tbody>{this.renderProduct()}</tbody>
        </table>
      </div>
    );
  }
}

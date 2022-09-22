import React, { Component } from 'react';
import FormProduct from './FormProduct';
import TableProduct from './TableProduct';
import axios from 'axios';

export default class ReactForm extends Component {
  state = {
    arrProduct: [
      {
        id: '1',
        name: 'product 1',
        price: 1000,
        img: 'https://picsum.photos/50/50',
        description: 'description product 1',
        type: 'mobile',
      },
      {
        id: '2',
        name: 'product 2',
        price: 2000,
        img: 'https://picsum.photos/50/50',
        description: 'description product 2',
        type: 'tablet',
      },
    ],
    productEdit: {
      id: '',
      name: '',
      price: 0,
      img: '',
      description: '',
      productType: '',
    },
  };

  updateProduct = (proUpdate) => {
    let prod = this.state.arrProduct.find((p) => p.id == proUpdate.id);
    if (prod) {
      prod.name = proUpdate.name;
      prod.price = proUpdate.price;
      prod.img = proUpdate.img;
      prod.description = proUpdate.description;
      prod.productType = proUpdate.productType;
    }
    //set lai state
    this.setState({
      arrProduct: this.state.arrProduct,
    });
  };

  editProduct = (proClick) => {
    this.setState({
      productEdit: proClick,
    });
  };

  addProduct = (newProduct) => {
    console.log(newProduct);
    let arrProductUpdate = [...this.state.arrProduct, { ...newProduct }];
    //setState
    this.setState({
      arrProduct: arrProductUpdate,
    });
  };

  delProduct = (idDel) => {
    let arrProductUpdate = this.state.arrProduct.filter(
      (pro) => pro.id !== idDel
    );
    // this.setState
    this.setState(
      {
        arrProduct: arrProductUpdate,
      },
      () => {
        this.luuStore();
      }
    );
  };

  layStore() {
    if (localStorage.getItem('arrProduct')) {
      let arrProduct = JSON.parse(localStorage.getItem('arrProduct'));
      return arrProduct;
    }
    return [];
  }

  luuStore() {
    let value = JSON.stringify(this.state.arrProduct);
    localStorage.setItem('arrProduct', value);
  }

  render() {
    return (
      <div className="container">
        <h3>Product management</h3>
        <FormProduct
          addProduct={this.addProduct}
          productEdit={this.state.productEdit}
          updateProduct={this.updateProduct}
        />
        <TableProduct
          arrProduct={this.state.arrProduct}
          delProduct={this.delProduct}
          editProduct={this.editProduct}
        />
      </div>
    );
  }

  componentDidMount() {
    //hàm này sẽ thực thi sau khi nội dung dc render
    // this.setState({
    //   arrProduct: this.layStore(),
    // });

    let promise = axios({
      url: 'http://svcy.myclass.vn/api/Product/GetAll',
      method: 'GET',
    });
    promise.then((result) => {
      this.setState({
        arrProduct: result.data,
      });
    });
    promise.catch((err) => {
      console.log(err);
    });
  }
}

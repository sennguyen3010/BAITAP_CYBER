// import { Product } from '../model/Product.js';

function getProductApi() {
  const promise = axios({
    url: 'http://svcy.myclass.vn/api/Product/GetAll',
    method: 'GET',
  });
  promise.then(function (result) {
    console.log('data', result.data);
    renderProduct(result.data);
  });
  promise.catch(function (err) {
    console.log(err);
  });
}

window.onload = function () {
  getProductApi();
};

function renderProduct(arrProduct) {
  let html = '';
  arrProduct.map((item, index) => {
    let { id, img, name, price, description, type } = item;
    html += `
  <tr>
                <th scope="row">${id}</th>
                <td><img src="${img}" alt="..." style="width: 100px"></td>
                <td>${name}</td>
                <td>${price}</td>
                <td>${description}</td>
                <td>${type}</td>
                <td>
                  <button
                    class="btn btn-danger"
                    id="btnDelete"
                    onclick="deleteProduct('${id}')"
                  >
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                  <button
                    class="btn btn-primary"
                    id="btnUpdate"
                    onclick="updateProduct('${id}')"
                  >
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                </td>
              </tr>
  `;
  });

  //   console.log(html);
  document.querySelector('#tblDanhSachSanPham').innerHTML = html;
}

//----------------- CREATE ----------------

document.querySelector('#btnCreate').onclick = function () {
  let productAdd = new Product();
  var arrInput = document.querySelectorAll(
    '#frm input, #frm select, #frm textarea'
  );

  for (let input of arrInput) {
    let { id, value } = input;
    productAdd[id] = value;
  }

  document.querySelector('#id').value = '';
  document.querySelector('#img').value = '';
  document.querySelector('#name').value = '';
  document.querySelector('#type').value = '';
  document.querySelector('#price').value = '';
  document.querySelector('#description').value = '';

  const promise = axios({
    url: 'http://svcy.myclass.vn/api/Product/CreateProduct',
    method: 'POST',
    data: productAdd,
  });
  promise.then(function (result) {
    getProductApi();
  });
  promise.catch(function (err) {
    console.log(err);
  });
};

//-------------------- DELETE -------------------------

function deleteProduct(idClick) {
  // console.log(idClick);
  const promise = axios({
    url: 'http://svcy.myclass.vn/api/Product/DeleteProduct/' + idClick,
    method: 'DELETE',
  });
  promise.then(function (result) {
    getProductApi();
  });
  promise.catch(function (err) {
    console.log(err);
  });
}

//--------------------- UPDATE --------------------------
function updateProduct(idClick) {
  document.querySelector('#btnCreate').setAttribute('disabled', '');

  // console.log(idClick);
  const promise = axios({
    url: 'http://svcy.myclass.vn/api/Product/GetById/' + idClick,
    method: 'GET',
  });
  promise.then(function (result) {
    let productUpdate = result.data;

    document.querySelector('#id').value = productUpdate.id;
    document.querySelector('#img').value = productUpdate.img;
    document.querySelector('#name').value = productUpdate.name;
    document.querySelector('#type').value = productUpdate.type;
    document.querySelector('#price').value = productUpdate.price;
    document.querySelector('#description').value = productUpdate.description;
  });
  promise.catch(function (err) {
    console.log(err);
  });

  document.querySelector('#id').setAttribute('disabled', '');
}

//------------------ PUT -----------------------------
document.querySelector('#btnUpdate').onclick = function () {
  let updatedPr = new Product();

  let arrInput = document.querySelectorAll(
    '#frm input, #frm select, #frm textarea'
  );

  for (let input of arrInput) {
    let { id, value } = input;
    updatedPr[id] = value;
  }

  let promise = axios({
    url: 'http://svcy.myclass.vn/api/Product/UpdateProduct/' + updatedPr.id,
    method: 'PUT',
    data: updatedPr,
  });

  promise.then(function (result) {
    getProductApi();
  });

  promise.catch(function (err) {
    console.log(err);
  });

  //reset
  document.querySelector('#id').removeAttribute('disabled');
  document.querySelector('#btnCreate').removeAttribute('disabled');

  document.querySelector('#id').value = '';
  document.querySelector('#img').value = '';
  document.querySelector('#name').value = '';
  document.querySelector('#type').value = '';
  document.querySelector('#price').value = '';
  document.querySelector('#description').value = '';
};

// ------------------------ SEARCH ----------------------------
document.querySelector('#searchInput').oninput = function (e) {
  e.preventDefault();

  const myTimeout = setTimeout(resultSearch, 1000);

  function resultSearch() {
    let nameSearch = document.querySelector('#searchInput').value;

    if (nameSearch === '') {
      return getProductApi();
    }

    const promise = axios({
      url: 'http://svcy.myclass.vn/api/Product/SearchByName?name=' + nameSearch,
      method: 'GET',
    });
    promise.then(function (result) {
      renderProduct(result.data);
    });
    promise.catch(function (err) {
      console.log(err);
    });
  }
};

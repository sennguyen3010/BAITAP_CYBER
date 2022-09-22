function getNguoiDungApi() {
  const promise = axios({
    url: 'https://62cfc7d71cc14f8c087d30b1.mockapi.io/Products',
    method: 'GET',
  });
  promise.then(function (result) {
    // console.log(result.data);
    renderNguoiDung(result.data);
  });
}

window.onload = function () {
  getNguoiDungApi();
};

function renderNguoiDung(arrNguoiDung) {
  let html = '';
  arrNguoiDung.map((item, index) => {
    html += `
    <tr>
        <td>${index + 1}</td>
        <td>${item.taiKhoan}</td>
        <td>${item.matKhau}</td>
        <td>${item.hoTen}</td>
        <td>${item.email}</td>
        <td>${item.ngonNgu}</td>
        <td>${item.loaiND}</td>
        <td>
        <button class="btn btn-danger" id="btnXoa" onclick="xoaNguoiDung('${
          item.id
        }')">Xoá</button>
        <button class="btn btn-primary" data-toggle="modal" data-target="#myModal" id="btnSua" onclick="suaNguoiDung('${
          item.id
        }')">Sửa</button>
        
        </td>
    </tr>`;
  });
  document.querySelector('#tblDanhSachNguoiDung').innerHTML = html;
}

//------------------ Thêm người dùng ----------------
let nguoiDung = {
  id: '',
  taiKhoan: '',
  hoTen: '',
  matKhau: '',
  email: '',
  loaiND: '',
  ngonNgu: '',
  moTa: '',
  hinhAnh: '',
};
document.querySelector('#btnThem').onclick = function () {
  // {
  //     "id": "1",
  //     "taiKhoan": "jroberts",
  //     "hoTen": "July Roberts",
  //     "matKhau": "123456",
  //     "email": "jroberts@gmail.com",
  //     "loaiND": "GV",
  //     "ngonNgu": "ITALIAN",
  //     "moTa": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  //     "hinhAnh": "teacher_1.jpg"
  //     }
  const nd = nguoiDung;
  nd.taiKhoan = document.querySelector('#TaiKhoan').value;
  nd.hoTen = document.querySelector('#HoTen').value;
  nd.matKhau = document.querySelector('#MatKhau').value;
  nd.email = document.querySelector('#Email').value;
  nd.hinhAnh = document.querySelector('#HinhAnh').value;
  nd.loaiND = document.querySelector('#loaiNguoiDung').value;
  nd.ngonNgu = document.querySelector('#loaiNgonNgu').value;
  nd.moTa = document.querySelector('#MoTa').value;

  const promise = axios({
    url: 'https://62cfc7d71cc14f8c087d30b1.mockapi.io/Products',
    method: 'POST',
    data: nd,
  });

  promise.then(function (result) {
    getNguoiDungApi();
  });

  promise.catch(function (error) {
    console.log('error', error.response.data);
  });
};

//--------------------- xoá ------------------------
function xoaNguoiDung(idClick) {
  console.log(idClick);

  const promise = axios({
    url: 'https://62cfc7d71cc14f8c087d30b1.mockapi.io/Products/' + idClick,
    method: 'DELETE',
  });

  promise.then(function (result) {
    getNguoiDungApi();
  });

  promise.catch(function (error) {
    console.log('error', error);
  });
}

//--------------------- chỉnh sửa --------------------
function suaNguoiDung(idClick) {
  //   console.log(idClick);
  const promise = axios({
    url: 'https://62cfc7d71cc14f8c087d30b1.mockapi.io/Products/' + idClick,
    method: 'GET',
  });
  promise.then(function (result) {
    nguoiDung = result.data;
    document.querySelector('#TaiKhoan').value = nguoiDung.taiKhoan;
    document.querySelector('#HoTen').value = nguoiDung.hoTen;
    document.querySelector('#MatKhau').value = nguoiDung.matKhau;
    document.querySelector('#Email').value = nguoiDung.email;
    document.querySelector('#HinhAnh').value = nguoiDung.hinhAnh;
    document.querySelector('#loaiNguoiDung').value = nguoiDung.loaiND;
    document.querySelector('#loaiNgonNgu').value = nguoiDung.ngonNgu;
    document.querySelector('#MoTa').value = nguoiDung.moTa;
  });

  promise.catch(function (error) {
    console.log('error', error);
  });
}

// -------------PUT: cập nhật dl ------------------------
document.querySelector('#btnCapNhat').onclick = function () {
  const nd = nguoiDung;
  // console.log(nd.taiKhoan);
  nd.taiKhoan = document.querySelector('#TaiKhoan').value;
  nd.hoTen = document.querySelector('#HoTen').value;
  nd.matKhau = document.querySelector('#MatKhau').value;
  nd.email = document.querySelector('#Email').value;
  nd.hinhAnh = document.querySelector('#HinhAnh').value;
  nd.loaiND = document.querySelector('#loaiNguoiDung').value;
  nd.ngonNgu = document.querySelector('#loaiNgonNgu').value;
  nd.moTa = document.querySelector('#MoTa').value;
  // console.log(nd.taiKhoan);

  const promise = axios({
    url: 'https://62cfc7d71cc14f8c087d30b1.mockapi.io/Products/' + nd.id,
    method: 'PUT',
    data: nd,
  });

  promise.then(function (result) {
    getNguoiDungApi();
  });

  promise.catch(function (error) {
    console.log('error', error);
  });
};

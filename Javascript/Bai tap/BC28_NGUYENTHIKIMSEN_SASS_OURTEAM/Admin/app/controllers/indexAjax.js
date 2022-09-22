function getNguoiDungApi() {
  const promise = axios({
    url: 'https://62cfc7d71cc14f8c087d30b1.mockapi.io/Products',
    method: 'GET',
  });
  promise.then(function (result) {
    renderNguoiDung(result.data);
  });
  promise.catch(function (err) {
    console.log('getApi:', err);
  });
}

window.onload = function () {
  getNguoiDungApi();
};

let nd = [];

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

  nd = arrNguoiDung;
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

document.querySelector('#btnThem').onclick = function (e) {
  e.preventDefault();

  const ndAdd = nguoiDung;
  ndAdd.taiKhoan = document.querySelector('#TaiKhoan').value;
  ndAdd.hoTen = document.querySelector('#HoTen').value;
  ndAdd.matKhau = document.querySelector('#MatKhau').value;
  ndAdd.email = document.querySelector('#Email').value;
  ndAdd.hinhAnh = document.querySelector('#HinhAnh').value;
  ndAdd.loaiND = document.querySelector('#loaiNguoiDung').value;
  ndAdd.ngonNgu = document.querySelector('#loaiNgonNgu').value;
  ndAdd.moTa = document.querySelector('#MoTa').value;

  validateForm(nd);
  if (isFormValid() == true) {
    const promise = axios({
      url: 'https://62cfc7d71cc14f8c087d30b1.mockapi.io/Products',
      method: 'POST',
      data: ndAdd,
    });
    promise.then(function (result) {
      getNguoiDungApi();
      let modal = document.querySelector('#myModal');
      let backdrop = document.querySelector('.modal-backdrop');
      modal.classList.remove('show');
      backdrop.remove(); //remove tag div
    });
    promise.catch(function (err) {
      console.log('err', err);
    });
  } else {
    e.preventDefault();
  }
};

//--------------------- xoá ------------------------
function xoaNguoiDung(idClick) {
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

  setSuccess(taiKhoan);
  setSuccess(hoTen);
  setSuccess(matKhau);
  setSuccess(email);
  setSuccess(hinhAnh);
  setSuccess(loaiNguoiDung);
  setSuccess(loaiNgonNgu);
  setSuccess(moTa);

  document.querySelector('#TaiKhoan').setAttribute('disabled', '');
}

// -------------PUT: cập nhật dl ------------------------
document.querySelector('#btnCapNhat').onclick = function (e) {
  e.preventDefault();
  const ndUpdate = nguoiDung;

  ndUpdate.taiKhoan = document.querySelector('#TaiKhoan').value;
  ndUpdate.hoTen = document.querySelector('#HoTen').value;
  ndUpdate.matKhau = document.querySelector('#MatKhau').value;
  ndUpdate.email = document.querySelector('#Email').value;
  ndUpdate.hinhAnh = document.querySelector('#HinhAnh').value;
  ndUpdate.loaiND = document.querySelector('#loaiNguoiDung').value;
  ndUpdate.ngonNgu = document.querySelector('#loaiNgonNgu').value;
  ndUpdate.moTa = document.querySelector('#MoTa').value;

  const arrNew = nd.filter((item) => !(item.taiKhoan == ndUpdate.taiKhoan));

  validateForm(arrNew);

  if (isFormValid() == true) {
    const promise = axios({
      url:
        'https://62cfc7d71cc14f8c087d30b1.mockapi.io/Products/' + ndUpdate.id,
      method: 'PUT',
      data: ndUpdate,
    });

    promise.then(function (result) {
      let modal = document.querySelector('#myModal');
      let backdrop = document.querySelector('.modal-backdrop');
      modal.classList.remove('show');
      backdrop.remove(); //remove tag div

      getNguoiDungApi();
    });

    promise.catch(function (error) {
      console.log('error', error);
    });
  } else {
    // e.preventDefault();
  }
};

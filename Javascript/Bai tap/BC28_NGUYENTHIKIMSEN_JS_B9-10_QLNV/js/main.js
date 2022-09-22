var mangNhanVien = [];

document.querySelector('#btnThem').onclick = function () {
  document.querySelector('#tknv').value = '';
  document.querySelector('#name').value = '';
  document.querySelector('#email').value = '';
  document.querySelector('#password').value = '';
  document.querySelector('#datepicker').value = '';
  document.querySelector('#luongCB').value = '';
  document.querySelector('#chucvu').value = 'Chọn chức vụ';
  document.querySelector('#gioLam').value = '';
};

document.querySelector('#btnThemNV').onclick = function (e) {
  var nv = new NhanVien();

  //Lấy thông tin
  nv.taiKhoan = document.querySelector('#tknv').value;
  nv.hoTen = document.querySelector('#name').value;
  nv.email = document.querySelector('#email').value;
  nv.matKhau = document.querySelector('#password').value;
  nv.ngayLam = document.querySelector('#datepicker').value;
  nv.luongCoBan = document.querySelector('#luongCB').value;
  nv.chucVu = document.querySelector('#chucvu').value;
  nv.gioLam = document.querySelector('#gioLam').value;

  validateForm();
  // console.log(isFormValid());

  if (isFormValid() == true) {
    mangNhanVien.push(nv);

    renderTableNhanVien(mangNhanVien);

    // lưu vào localstorage
    var sLocalstorage = JSON.stringify(mangNhanVien);
    saveLocalStorage('mangNhanVien', sLocalstorage);
  }
};

function renderTableNhanVien(arrNhanVien) {
  var html = '';
  for (index = 0; index < arrNhanVien.length; index++) {
    var nv = arrNhanVien[index];

    if (!nv.hasOwnProperty('tinhTongLuong')) {
      nv.tinhTongLuong = function () {
        var tongLuong = 0;
        if (this.chucVu == 'giamDoc') {
          tongLuong = Number(this.luongCoBan) * 3;
          return tongLuong;
        } else if (this.chucVu == 'truongPhong') {
          tongLuong = Number(this.luongCoBan) * 2;
          return tongLuong;
        } else if (this.chucVu == 'nhanVien') {
          tongLuong = Number(this.luongCoBan);
          return tongLuong;
        }
      };
    }

    if (!nv.hasOwnProperty('xepLoai')) {
      nv.xepLoai = function () {
        var soGioLam = Number(this.gioLam);
        var xepLoai = '';
        if (soGioLam >= 192) {
          return (xepLoai = 'Nhân viên xuất sắc');
        } else if (soGioLam >= 176) {
          return (xepLoai = 'Nhân viên giỏi');
        } else if (soGioLam >= 160) {
          return (xepLoai = 'Nhân viên khá');
        } else if (soGioLam < 160) {
          return (xepLoai = 'Nhân viên trung bình');
        }
      };
    }
    var tr = `<tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.hoTen}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tinhTongLuong()}</td>
        <td>${nv.xepLoai()}</td>
        <td><button class="btn btn-danger mb-2" onclick="xoaNhanVien('${index}')">Xoá</button>
          <button class="btn btn-primary mb-2" data-toggle="modal"
          data-target="#myModal" onclick="suaNhanVien('${index}')">Sửa</button></td>
      </tr>
        `;
    html += tr;
  }
  document.querySelector('#tableDanhSach').innerHTML = html;
}

// lưu localstorage
function saveLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

//lấy localstorage
function getLocalStorage(key) {
  if (localStorage.getItem(key)) {
    return localStorage.getItem(key);
  }
  return undefined;
}

window.onload = function () {
  if (getLocalStorage('mangNhanVien')) {
    mangNhanVien = JSON.parse(getLocalStorage('mangNhanVien'));
    renderTableNhanVien(mangNhanVien);
  }
};

function xoaNhanVien(index) {
  // var viTriXoa = -1;
  // for (index = 0; index < mangNhanVien.length; index++) {
  //   if (tknv == mangNhanVien[index].taiKhoan) {
  //     viTriXoa = index;
  //     break;
  //   }
  // }

  mangNhanVien.splice(index, 1);
  renderTableNhanVien(mangNhanVien);
  saveLocalStorage('mangNhanVien', JSON.stringify(mangNhanVien));
}

var id = 0;
function suaNhanVien(index) {
  id = index;
  // for (index = 0; index < mangNhanVien.length; index++) {
  //   if (tk == mangNhanVien[index].taiKhoan) {
  var nv = mangNhanVien[index];
  document.querySelector('#tknv').value = nv.taiKhoan;
  document.querySelector('#email').value = nv.email;
  document.querySelector('#name').value = nv.hoTen;
  document.querySelector('#password').value = nv.matKhau;
  document.querySelector('#datepicker').value = nv.ngayLam;
  document.querySelector('#luongCB').value = nv.luongCoBan;
  document.querySelector('#chucvu').value = nv.chucVu;
  document.querySelector('#gioLam').value = nv.gioLam;
  //   break;
  // }
  // }
}

document.querySelector('#btnCapNhat').onclick = function () {
  var nvCapNhat = new NhanVien();

  nvCapNhat.taiKhoan = document.querySelector('#tknv').value;
  nvCapNhat.hoTen = document.querySelector('#name').value;
  nvCapNhat.email = document.querySelector('#email').value;
  nvCapNhat.matKhau = document.querySelector('#password').value;
  nvCapNhat.ngayLam = document.querySelector('#datepicker').value;
  nvCapNhat.luongCoBan = document.querySelector('#luongCB').value;
  nvCapNhat.chucVu = document.querySelector('#chucvu').value;
  nvCapNhat.gioLam = document.querySelector('#gioLam').value;

  validateForm();

  // for (index = 0; index < mangNhanVien.length; index++) {
  var nvMang = mangNhanVien[id];
  // if (nvMang.taiKhoan == nvCapNhat.taiKhoan) {
  nvMang.taiKhoan = nvCapNhat.taiKhoan;
  nvMang.hoTen = nvCapNhat.hoTen;
  nvMang.email = nvCapNhat.email;
  nvMang.matKhau = nvCapNhat.matKhau;
  nvMang.ngayLam = nvCapNhat.ngayLam;
  nvMang.luongCoBan = nvCapNhat.luongCoBan;
  nvMang.chucVu = nvCapNhat.chucVu;
  nvMang.gioLam = nvCapNhat.gioLam;

  // console.log(isFormValid());

  if (isFormValid() == true) {
    // mangNhanVien.push(nv);

    renderTableNhanVien(mangNhanVien);

    // lưu vào localstorage
    var sLocalstorage = JSON.stringify(mangNhanVien);
    saveLocalStorage('mangNhanVien', sLocalstorage);
  }

  // renderTableNhanVien(mangNhanVien);
  //   break;
  // }
  // }
};

//------------------------ search -----------------------//
document.querySelector('#searchName').addEventListener('input', function () {
  var searchValue = document
    .querySelector('#searchName')
    .value.trim()
    .toLowerCase();

  var nvMangXepLoai = [];
  for (var index = 0; index < mangNhanVien.length; index++) {
    var nv = mangNhanVien[index].xepLoai();
    if (nv.toLowerCase().trim().search(searchValue) != -1) {
      nvMangXepLoai.push(mangNhanVien[index]);
    }
  }
  renderTableNhanVien(nvMangXepLoai);
});

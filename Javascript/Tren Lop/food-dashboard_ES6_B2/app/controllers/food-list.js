import { LOAI_MON, TINH_TRANG } from '../models/constant/constant.js';
import { Menu } from '../models/Menu.js';
import { MonAn } from '../models/MonAn.js';
{
  //lấy dữ liệu từ localstorage ra
  // let mangMonAn = [];
  // window.onload = function () {
  //   //trang food-list.html load xong  thì lấy dữ liệu từ localstorage gán vào mảng món an
  //   layMonAn();
  //   console.log('mangMonAn', mangMonAn);
  // };
  // //lưu món ăn vào localstorage
  // function luuMonAn() {
  //   //biến đổi mảng món ăn thành chuỗi
  //   let sMangMonAn = JSON.stringify(mangMonAn);
  //   localStorage.setItem('mangMonAn', sMangMonAn);
  // }
  // function layMonAn() {
  //   //ktra storage có mảng đó hay k => có mới lấy ra
  //   if (localStorage.getItem('mangMonAn')) {
  //     let sMangMonAn = localStorage.getItem('mangMonAn');
  //     mangMonAn = JSON.parse(sMangMonAn);
  //   }
  // }
}

//lấy dữ liệu từ localstorage ra đưa vào thuộc tính của menu.danSachMonAn
let menu = new Menu();
menu.layMonAn();
//console.log('menu', menu);

const renderTableMonAn = (mangMonAn) => {
  let html = '';

  for (let monAn of mangMonAn) {
    let newMonAn = new MonAn(); // {maMon: '', tenMon: ''}
    let monAnMerge = { ...newMonAn, ...monAn };

    html += `
    <tr>
    <td>${monAnMerge.maMon}</td>
    <td>${monAnMerge.tenMon}</td>
    <td>${LOAI_MON[monAnMerge.loai]}</td>
    <td>${monAnMerge.giaMon}</td>
    <td>${monAnMerge.khuyenMai}</td>
    <td>${monAnMerge.tinhGiaKhuyenMai()}</td>
    <td>${TINH_TRANG[monAnMerge.tinhTrang]}</td>
    <td>
        <button class="btn btn-danger" onclick="xoaMonAn('${
          monAnMerge.maMon
        }')">Xoá</button>
        <button class="btn btn-primary" data-toggle="modal"
        data-target="#exampleModal" onclick="chinhSua('${
          monAnMerge.maMon
        }')">Sửa</button>
    </td>
  </tr>
    `;
  }
  document.querySelector('#tbodyFood').innerHTML = html;
};

//gọi hàm render table truyền vào mảng món ăn
renderTableMonAn(menu.danhSachMonAn);

window.xoaMonAn = (maMonAnClick) => {
  //alert(maMonAnClick);
  menu.xoaMonAn(maMonAnClick);

  renderTableMonAn(menu.danhSachMonAn);

  //   console.log(menu);
};

window.chinhSua = (maMonClick) => {
  let monAnChinhSua = menu.layThongTinMonAn(maMonClick);
  //   console.log('monAnChinhSua', monAnChinhSua);

  let arrInput = document.querySelectorAll(
    '#foodForm input,#foodForm select,#foodForm textarea'
  );
  //duyệt qua từng thẻ
  for (let input of arrInput) {
    let { id } = input;
    input.value = monAnChinhSua[id];
  }
};

document.querySelector('#btnCapNhat').onclick = function () {
  //lấy dữ liệu người dùng từ giao diện
  let monAnEdit = new MonAn();
  let arrInput = document.querySelectorAll(
    '#foodForm input,#foodForm select,#foodForm textarea'
  );
  for (let input of arrInput) {
    monAnEdit[input.id] = input.value;
  }
  //cập nhật món ăn trong mảng = món ăn người dùng edit
  menu.capNhatMonAn(monAnEdit.maMon, monAnEdit);

  //tạo table mới
  renderTableMonAn(menu.danhSachMonAn);
};

import { LOAI_MON, TINH_TRANG } from '../models/constant/constant.js';
import { MonAn } from '../models/MonAn.js';

import { translate } from '../../translate/Vi.js';
import { Menu } from '../models/Menu.js';

// let mangMonAn = [];

let menu = new Menu();
menu.layMonAn();
console.log('menu', menu);

document.querySelector('#btnThemMon').onclick = function () {
  // lấy thông tin người dùng nhập
  let mon = new MonAn(); // {maMon: '', tenMon: ''}
  var arrInput = document.querySelectorAll(
    '#foodForm input,#foodForm select,#foodForm textarea'
  );
  //   console.log(arrInput);

  for (let input of arrInput) {
    let { id, value } = input; //destructoring object
    mon[id] = value; // dynamic key
  }

  let html = '';
  for (let key in mon) {
    //duyệt qua các thuộc tính của object món ăn
    let giaTri = mon[key];

    console.log('key', key);

    console.log(mon[key]);
    if (typeof mon[key] == 'function') {
      giaTri = mon[key](); //gọi hàm
    }
    switch (key) {
      case 'loai':
        {
          giaTri = LOAI_MON[mon[key]];
        }
        break;
      case 'tinhTrang':
        {
          giaTri = TINH_TRANG[mon[key]];
        }
        break;
      case 'hinhMon': {
        giaTri = `
        <img src="${mon[key]}" alt="" width="200" height="100" />
        
        `;
      }
    }
    // if (key === 'loai') {
    //   giaTri = LOAI_MON[mon[key]];
    // }

    html += `
      <li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
        <h6 class="my-0">${translate[key]}</h6>
        </div>
        <span id="sp-${key}" class="text-muted">${giaTri}</span>
        </li>
    `;
  }
  document.querySelector('ul.list-group').innerHTML = html;

  //lưu món ăn vào mảng món an
  menu.themMonAn(mon);
  menu.luuMonAn();
};

{
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

//đợi html load xong thì các hàm trong function này sẽ dc gọi
// window.onload = function () {
//   layMonAn();
// };

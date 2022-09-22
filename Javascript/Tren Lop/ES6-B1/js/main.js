/**
 1. cơ chế khai báo biến var, let, const
 * var: hỗ trợ cơ chế hoisting (tự khai báo 1 biến trên đầu file)
  phạm vi của var ảnh hưởng toàn scope
  * let: không hỗ trợ hoisting. phạm vi ảnh hưởng trên từng scope 
  (trong cùng 1 scope thì không thể khai báo 2 biến trùng).
  nếu khác scope thì js tự tạo thêm biến mới
  => trong es6 sử dụng let thay cho var trong tất cả trường hợp
  const: tương tự như let ko hỗ trợ hoisting, và ko thể gán lại giá trị sau khi khai báo. Lưu ý:
  đối với object or array or đối tượng thì sẽ ko gán lại đc object or array hay đối tượng khác
  mà chỉ có thể thay đổi giá trị bên trong thuộc tính or phần tử mà thôi
 */

let title = 'cybersoft';
{
  let title = 'bc28';
  console.log(title); //bc28
}
console.log(title); // cybersoft

/**
 * var title = 'cybersoft';
{
  var title = 'bc28';
  console.log(title); //bc28
}
console.log(title); // bc28
 */

// ứng dụng vd1
let arrButton = document.querySelectorAll('button');

for (let index = 0; index < arrButton.length; index++) {
  let btn = arrButton[index];
  btn.onclick = function () {
    // alert(index); // call API
  };
}

const DOMAIN = 'https://svcy.myclass.vn//api';
//DOMAIN = 'ABC'
{
  const DOMAIN = 'ABC';
}

const SETTING = {
  URL: 'ABC.COM',
};
//Khi hằng số là array or object thì không thể gán lại
//array or object khác tuy nhiên có thể thay đổi giá trị thuộc tính bên trong
SETTING.URL = 'ABCXYZ';

/**
 Có 2 loại giá trị lưu trữ
 primitive value: string, number, boolean, undefined, null
 các kiểu dữ liệu máy tính hiểu được

 reference value (object, array, SinhVien ...): {}
  hoặc []: biến lưu trữ địa chỉ ô nhớ

  let sv = new SinhVien();
  0xxx
  let ob1 = {};
  0yyy
 
 */

/**-----------------function-------------------- */
//declaraton funtion: hỗ trợ hoisting (cho phép gọi hàm trước khi khai báo)
// function main() {
//   console.log('main');
// }

// function main() {
//   console.log('main 2');
// }
// main();
//expression function: không hỗ trợ hoisting
//showMess();
var showMess = function () {
  console.log('showMess');
};

var showMess = function () {
  console.log('showMess 123');
};
//showMess();
//--------------------Arrow funtion-----------------
/**
 *  Arrowfunction:
 * + ko hỗ trợ hoisting
 * + khi function chỉ có 1 tham số thì không cần (). 2 tham số trở lên ơhải có (param1, param2)
 * + khi function chỉ có duy nhất 1 lệnh return thì có thể bỏ {} và return. nếu nhiều dòng xử lý thỉ phải có {
 * //lệnh 1;
 * //lệnh 2; ...
 * }
 * + arrow function ko hỗ trợ con trỏ this (context), ko thể khai báo prototype = arrow function
 */
let renderTitle = (title) => 'Hello' + title;
console.log(renderTitle('abc'));

/**
 * -----------------context(this)-------------
 * + mặc định: khi this ko xác định dc ngữ cảnh thì this sẽ là window
 * + trong object: thì this sẽ là object đó
 * + trong function: thì this chính là function đó
 *
 * => dùng arrow function cho định nghĩa hàm để loại bỏ ngữ cảnh function của con trỏ this
 *
 */
//var hoTen = 'abc';
//this.hoTen = 'abc';
window.hoTen = 'abc';
console.log(hoTen);

console.log(this);

console.log('chiều dài màn hình: ', window.innerWidth);
console.log('chiều cao màn hình: ', window.innerHeight);
window.document.title = 'BC 28';
console.log(window.location.href);

let product = {
  id: 1,
  name: 'product1',
  price: 1000,
  showInfo: function () {
    console.log('id', this.id);
    console.log('name', this.name);
  },
};
product.showInfo();

function LopHoc() {
  this.maLop = '';
  this.tenLop = '';
  this.hienThi = function () {
    console.log('maLop', this.maLop);
    console.log('tenLop', this.tenLop);
  };
}

let lh1 = new LopHoc();

let lh2 = new LopHoc();

/**
 * cho mảng màu yêu cầu
 * + render ra các button tại div#colors
 * + xử lý khi click vào các button thì i#home thay đổi màu sắc tương ứng
 *
 */

let arrColor = [
  'red',
  'green',
  'blue',
  'orange',
  'pink',
  'yellow',
  'black',
  'purple',
];

// function renderButton() {
//   for (let i = 0; i < arrColor.length; i++) {
//     let value = arrColor[i];
//     let button = document.createElement('button');
//     button.style.backgroundColor = value;
//     button.style.color = 'white';

//     let text = document.createTextNode(value);
//     button.appendChild(text);
//     document.querySelector('#colors').appendChild(button);
//   }
// }
// renderButton();

// document.querySelector('#colors').onclick = function () {
//   for (let i = 0; i < arrColor.length; i++) {
//     let value = arrColor[i];
//     let classColor = document.querySelector('#colors').classList.add(value);

//     document.getElementsByClassName('classColor').style.color = value;
//   }
// };

let renderButton = () => {
  //input: arrColor[ ]

  //output: html <button class="btn" style="background-color: red; color: #fff">Red</button>
  let html = '';
  for (let index = 0; index < arrColor.length; index++) {
    //mỗi lần duyệt lấy ra 1 màu
    let color = arrColor[index];
    html += `<button class="btn" style="background-color: ${color}; color: #fff"; onclick="changeColor('${color}')">${color}</button>`;
  }
  //in output ra giao dien
  document.querySelector('#colors').innerHTML = html;
};

window.changeColor = (color) => {
  document.querySelector('#home').style.color = color;
};

//khi trang web vừa load lên gọi hàm renderButton thực thi
window.onload = function () {
  renderButton();
};

//-----------------default parameter---------------------
/**
 * khi gọi hàm ko truyền tham số thì hàm sẽ lấy giá trị mặc định. tuy nhiên nếu gọi hàm truyền tham số thì hàm sẽ lấy
   tham số mình truyền
 */

let hienThiThongTinHV = (
  hoTen = 'Nguyễn Đình Sang',
  namSinh = '1999',
  tuoi = 2022 - namSinh
) => {
  console.log('họ tên: ', hoTen);
  console.log('tuổi: ', tuoi);
};
hienThiThongTinHV();
hienThiThongTinHV('Quang Hậu', 2000);
hienThiThongTinHV('Khải', 1998, 18);

//---------------restparameter-----------------------
/**
 *  restparameter: nhận nhìu tham số khi gọi hàm dưới dạng array
 *
 */

let tinhTong = (...danhSachThamSo) => {
  //[1,2] | [1,2,3]
  switch (danhSachThamSo.length) {
    case 2:
      {
        console.log('Tổng = ', danhSachThamSo[0] + danhSachThamSo[1]);
      }
      break;
    case 3:
      {
        console.log(
          'Tổng = ',
          danhSachThamSo[0] + danhSachThamSo[1] + danhSachThamSo[2]
        );
      }
      break;
    default: {
      console.log('Tham số không hợp lệ');
    }
  }
};
tinhTong(1, 2);
tinhTong(1, 2, 3);
tinhTong(1, 2, 3, 4);

//---------------------spread operator----------------------
// spread operator: dùng để clone giá trị của object or array. có thể thêm đc thuộc tính or
// gán lại giá trị thuộc tính với cú pháp ngắn gọn hơn
let ob1 = { id: 5, price: 1000 }; //0xxx
let ob2 = { ...ob1, name: 'product1', price: 2000 }; //0yyy
ob2.id = 10;
//ob2.price = 2000

console.log('ob1', ob1);
console.log('ob2', ob2);

let arr1 = [1, 2, 3, 4];
let arr2 = [...arr1, 7, 8, 9];
//arr2.push(6, 7, 8);

console.log('arr1', arr1);
console.log('arr2', arr2);

//------------------------destructuring----------------------
/**
 *  + dùng để bóc tách thuộc tính từ object or mảng ra để tạo thành 1 biến ngắn gọn hơn
 */
let product1 = {
  id: 1,
  name: 'product1',
  price: 1000,
  showInfo: function () {
    console.log('show info');
  },
};

// let id = product1.id;
let { id, showInfo, ...rest } = product1;
showInfo();
console.log('id', id);
console.log('ttConLai', rest);

//tuple:

let [maSP, tenSP, price, hienThiTTSP] = [
  1,
  'product1',
  1000,
  function () {
    console.log('show info');
  },
];

console.log('id', maSP);
hienThiTTSP();

let mangA = [1, 2, 3];
let mangB = mangA;
mangB.push(4, 5, 6);
console.log(mangA);
console.log(mangB);

/**------------------Dynamic key------------------- */
//cho phép truyền giá trị vào tên thuộc tính (key)

let key = 'mô tả';

let prod = {
  id: 1,
  name: 'product 1',
  [key]: 'product 1 desc',
};
console.log(prod);
console.log('mô tả:', prod[key]);

/**---------------------object literal----------------- */
// tạo ra tên thuộc tính dựa vào tên biến, và lấy giá trị biến làm giá trị thuộc tính

let idOb = '01';
let nameOb = 'Mị';
let showInfoOb = function () {
  console.log(idOb);
  console.log(nameOb);
};

let myObj = {
  idOb,
  nameOb,
  showInfoOb,
};
console.log(myObj);

/**---------------------for in, for of ------------------ */

let arrProduct = [
  { id: '01', name: 'Iphone', price: 1000, productTypeId: 'Phone' },
  { id: '02', name: 'Iphone XS', price: 2000, productTypeId: 'Phone' },
  { id: '03', name: 'Macbook Pro', price: 1500, productTypeId: 'Laptop' },
  { id: '04', name: 'Macbook Pro 2022', price: 2500, productTypeId: 'Laptop' },
  { id: '05', name: 'Ipad Pro', price: 2500, productTypeId: 'Tablet' },
  { id: '06', name: 'Ipad Pro 2022', price: 3500, productTypeId: 'Tablet' },
];

//for of: dùng để duyệt mảng ([]) mỗi lần duyệt lấy ra 1 phần tử của mảng
//for in: dùng để duyệt object ({}) mỗi lần duyệt lấy ra tên thuộc tính (key) của object
for (let index in arrProduct) {
  //mỗi lần duyệt lấy ra index của mảng
  let prod = arrProduct[index];

  console.log('prod: ', prod);
}

//for in: ngoài duyệt index của mảng thì còn duyệt được key của object

let productDefault = {
  id: '01',
  name: 'Product 1',
  price: 1000,
  desc: 'product desc',
};

let tr = '<tr>';
// console.log('id', productDefault['id']);
for (let key in productDefault) {
  console.log(key, productDefault[key]);
  tr += `<td>${productDefault[key]}</td>`;
}
tr += '</tr>';
console.log(tr);

for (let prod of arrProduct) {
  //mỗi lần duyệt lấy ra 1 phần tử của mảng
  console.log('prod', prod);
}

// một số hàm xử lý mảng trong ES6 [].method

/**
 * .filter: dùng để lọc 1 mảng con (kết quả trả về mảng) từ mảng chính. nếu phần tử thoả arrow function
thì phần tử đó sẽ dc add vào mảng kq. nếu ko có phần tử nào khớp thì kq trả về mảng rỗng []
 * 
 *  */

//lấy ra các product là phone

let arrPhone = arrProduct.filter((item) => item.productTypeId === 'Phone');

console.log('arrPhone', arrPhone);

// lấy ra các sản phẩm có giá từ 2000 trở xuống
let arrPrice2000 = arrProduct.filter((item) => item.price <= 2000);
console.log('arrPrice2000', arrPrice2000);

/**.findIndex: dùng để tìm vị trí phần tử trong mảng khớp với arrow function. nếu tìm ko thấy thì trả về -1 */
//(chỉ tìm ra dc 1 phần tử thoả điều kiện)
let index = arrProduct.findIndex((prod) => prod.id === '03');

console.log('index', index);

/**.find: lấy ra 1 giá trị trong mảng khớp với arrow function. nếu tìm ko thấy thì trả về undefined. (tương tự findIndex
 * nhưng trả về phần tử đó thay vì trả về vị trí của phần tử đó)
 * */
let pt05 = arrProduct.find((item) => item.id === '05');
if (pt05) {
  pt05.price = 5000;
  console.log('arrProduct', arrProduct);
} else {
  console.log('không tìm thấy');
}

/**.map(): hàm dùng để biến đổi mảng này thành mảng khác. tạo ra mảng mới từ mảng cũ */

// let arrResult = arrProduct.map((item, index) => {
//   // xử lý để trả về ele mới
//   let newValue = { value: item.id, name: item.name };
//   return newValue;
// });

// console.log(arrResult);

// let html = arrProduct.map((item, index) => {
//   let tr = `<tr>
//   <td>${item.id}</td>
//   <td>${item.name}</td>
//   <td>${item.price}</td>
//   <td>${item.productTypeId}</td>
//   </tr>`;
//   return tr;
// });

// console.log(html);

// for (let tr of html) {
//   document.querySelector('#tableProduct').innerHTML += tr;
// }

/**reduce: tương tự map tuy nhiên biến 1 mảng thành 1 giá trị ([], {}, string, number ...) */
//ví dụ:  muốn tính tổng tiền của tất cả sp

let tongTien = arrProduct.reduce((price, item, index) => {
  //price: 0
  return price + item.price;
}, 0);
console.log(tongTien);

let renderTblProduct = () => {
  let html = arrProduct.reduce((innerHTML, item, index) => {
    return (
      innerHTML +
      `<tr>
     <td>${item.id}</td>
     <td>${item.name}</td>
     <td>${item.price}</td>
     <td>${item.productTypeId}</td>
     </tr>`
    );
  }, '');
  document.querySelector('#tableProduct').innerHTML += html;
};
// renderTblProduct();

/**reverse: hàm đảo ngược */

arrProduct.reverse();
console.log('arrProduct', arrProduct);

/**sort:  */
//sort theo giá tiền sp

document.querySelector('#btnSapXepTheoGia').onclick = function () {
  // let arrSortGia = arrProduct.sort((pt1, pt2) => {
  //   return pt1.price - pt2.price;
  // });
  arrProduct = _.sortBy(arrProduct, ['price', 'name']);
  //arrProduct.reverse()
  renderTblProduct();
};

//bài tập: thông tin nhân viên
document.querySelector('#btnXuatThongTin').onclick = (event) => {
  event.preventDefault(); // chặn cơ chế reload của browser

  let arrInput = document.querySelectorAll('#frm input,#frm select');

  //[input, input, input, select]
  let nv = {};
  // DOM
  for (let tagInput of arrInput) {
    let { id, value } = tagInput; //destructering object
    // let value = tagInput.value;
    nv[id] = value;
  }
  console.log(nv);
  // console.log(arrInput);

  let html = '';
  for (let key in nv) {
    html += `<tr>
  <td>${key}</td>
  <td>${nv[key]}</td>
</tr>`;
  }

  document.querySelector('#tblNhanVien').innerHTML = html;
};

import { NhanVien, arr } from '../model/NhanVien.js';

//import default (import từ 1 file export default)
import NhanVienProto from '../model/NhanVien.js';

let nv = new NhanVien();
console.log(nv);
console.log(arr);

//-------------------- class -------------------------

//es5
function SinhVienES5(masv, tensv) {
  this.maSinhVien = masv;
  this.tenSinhVien = tensv;
  this.hienThiTT = function () {
    console.log('mã sinh viên', this.maSinhVien);
    console.log('tên sinh viên', this.tenSinhVien);
  };
}

//es6
class SinhVienES6 {
  maSinhVien = '';
  tenSinhVien = '';
  constructor(masv, tensv) {
    // hàm khởi tạo
    this.maSinhVien = masv;
    this.tenSinhVien = tensv;
  }
  // phương thức
  hienThiTT() {
    console.log('mã sinh viên', this.maSinhVien);
    console.log('tên sinh viên', this.tenSinhVien);
  }
}

//hàm khởi tạo có tham số trong es5
let svES5 = new SinhVienES5(1, 'Nguyễn văn a');
console.log(svES5);

let sv = new SinhVienES6(2, 'nguyễn văn tèo');

console.log(sv);

//-------------------- Tính chất của hướng đối tượng ------------
/**
 * JS không phải là ngôn ngữ thuần hướng đối tượng
 * + Tính trừu tượng (Abstraction): đưa các thông tin cần lưu trữ ở ngoài thực tế vào đối tượng
 * (trở thành thuộc tính, phương thức)
 * + Tính đóng gói (Encapsolation): thuộc tính và phương thức của đối tượng nào thì chỉ có đối tượng đó truy xuất
 * + Tính kế thừa (Inheritance): Tất cả thuộc tính của class cha sẽ đc thừa hưởng ở class con mà ko cần khai báo.
 *    . khi nào khai báo phương thức thuần tenPhuongThuc(){} 
 *     => khi cần overide hàm
 *    . khi nào khai báo phương thức thuộc tính = function (){}
 *     => khi cần sao chép giá trị bởi spread operator (mặc định)
 * 
 * + Tính đa hình: (JS không có - TypeScript sẽ có)
 */

class NguoiDung {
  taiKhoan = '';
  matKhau = '';
  email = '';
  soDienThoai = '';
  cmnd = '';
  luongCB = 1000;
  heSoLuong = 1;
  constructor() {}
  dangNhap() {
    console.log('Hello ', this.taiKhoan);
    //chuyển hướng về profile
  }
  dangXuat() {
    console.log('Đăng xuất');
  }
  chamCong() {
    let luong = this.luongCB * this.heSoLuong;
    console.log('Chấm công gv', luong);
    return luong;
  }
}

class GiangVien extends NguoiDung {
  soBuoiDay = 0;
  constructor() {
    super();
  }

  //overide: ghi đè hàm cha
  dangNhap() {
    super.dangNhap();
    //chuyển hướng view giản viên
    console.log('chuyển hướng');
  }

  chamCong() {
    super.luongCB = 5000;
    return super.chamCong() * 1.5;
  }
}

// class Mentor extends NguoiDung {
//   luongCB = 0;
//   soBuoiDay = 0;
//   constructor() {
//     super();
//   }
//   chamBai() {
//     console.log('Chấm bài');
//   }
// }

let gv = new GiangVien();
console.log(gv.chamCong());

// let mentor = new Mentor();

// var hoTen1 = 'Nam'
// var hoTen1 = 'Bình'
// var hoTen1 = 'Bảo'
// var hoTen1 = 'Sang'
// var hoTen1 = 'Hằng'

//array: là kiểu dữ liệu lưu trữ dc nhiều giá trị có cùng kiểu dữ liệu và các nhau bởi dấu ,
var arrNumber = [4, 5, 6, 7, 8, 9];
var arrHoTen = ['Nam', 'Bình', 'Bảo', 'Sang', 'Hằng'];

//Read, Create, Update, Delete
//Read
//R: truy xuất 1 phần tử trong mảng cú pháp: tenMang[index]
console.log(arrHoTen[0]);
console.log(arrHoTen[1]);
console.log(arrHoTen[2]);
console.log(arrHoTen[3]);
console.log(arrHoTen[4]);
//console.log(arrHoTen[5])//undefined

//console.log(arrHoTen);

for (var index = 0; index < arrHoTen.length; index++) {
  //length: độ dài/số phần tử của array (5)
  console.log(arrHoTen[index]);
}

/*--------Thêm 1 phần tử vào mảng ----------------- */
//Create: thêm 1 phần tử vào mảng
//cú pháp: arr.push(['gía trị])
arrHoTen.push('Minh');

console.log(arrHoTen);
console.table(arrHoTen);

//cú pháp: pop() lấy ra 1 phần tử trong mảng vị trí cuối cùng và xoá nó đi khỏi mảng
let hoTenCuoi = arrHoTen.pop();
console.log(arrHoTen);
console.log(hoTenCuoi);

//cú pháp: Thêm 1 phần tử vào đầu mảng (sẽ làm thay đổi vị trí index các phần tử còn lại nên ít sd)
arrHoTen.unshift('Thảo');
console.log(arrHoTen);
//shift: Lấy ra phần tử đầu mảng => thay đổi vị trí index
let firstItem = arrHoTen.shift();
console.log(firstItem);
console.log(arrHoTen);
/*------------ Thay đổi giá trị phần tử trong mảng ------------*/
arrHoTen[2] = 'Thanh';
console.log(arrHoTen);

/*------------- Xoá 1 phần tử trong mảng */
//cú pháp: arr.splice(index,1)
arrHoTen.splice(3, 1);
console.log(arrHoTen);

/*---------------bài tập ví dụ */
//global variable: là biến input cho tất cả các bài tập bên dưới
var arrNumber = [4, 5, 6, 10, 28, 29, 30, 43];

document.getElementById('btnNhapSo1').onclick = function () {
  //input
  var iSo = Number(document.getElementById('nhapSo1').value);
  //output
  var output = '';
  //Thêm 1 phần tử vào mảng
  arrNumber.push(iSo);

  output = '[' + arrNumber + ']';

  //Hiển thị mảng ra giao diện sau khi thêm
  document.getElementById('arr').innerHTML = output;
};
// //tính tổng số chẵn
// document.getElementById('btnTinhTongSoChan').onclick = function () {
//   tinhTongsoChan();
// };
// function tinhTongsoChan() {
//   var tongSoChan = 0;

//   for (var num = 0; num < arrNumber.length; num++) {
//     if (arrNumber[num] % 2 === 0) {
//       tongSoChan += arrNumber[num];
//     }
//   }
//   document.getElementById('ketQua1').innerHTML = tongSoChan;
// }

//Bài 1: xoá giá trị ra khỏi mảng
document.getElementById('btnXoaGiaTri').onclick = function () {
  var giaTri = Number(document.getElementById('giaTri_2').value);
  var index = -1;
  //Tìm kiếm, xoá, lấy ra, thay đổi,... phải duyệt mảng (chạy index qua các phần tử của mảng)
  for (var i = 0; i < arrNumber.length; i++) {
    var ele = arrNumber[i];
    if (giaTri === ele) {
      index = i; // Nếu giá trị nhập vào trùng với giá trị trong mảng thì lấy ra giá trị i(index tại đó)
      break;
    }
  }
  if (index !== -1) {
    //xoá dữ liệu của mảng tại vị trí tìm thấy
    arrNumber.splice(index, 1);
    document.getElementById('arr').innerHTML = '[' + arrNumber + ']';
  } else {
    alert('không tìm thấy phần tử ' + giaTri + ' trong mảng');
  }
};

//ví dụ 1: Lấy dữ liệu thông qua tagname
var arrTagSection = document.getElementsByTagName('section');

for (var index = 0; index < arrTagSection.length; index++) {
  arrTagSection[index].style.fontSize = '20px';
}
//console.log(arrTagSection);
//ví dụ 2: Lấy dữ liệu thông qua classname
var arrClassText = document.getElementsByClassName('txt');
console.log(arrClassText);

for (var i = 0; i < arrClassText.length; i++) {
  arrClassText[i].style.color = 'red';
}

//trường hợp thêm 1 class vào để code thêm chức năng cho thẻ mà k ảnh hưởng code cũ của người khác
var tagTextColor = document.getElementsByClassName('text-color');
tagTextColor[0].style.color = 'green';

/*--------------querySelector----------- */
//querySelector: Truy xuất đến thẻ dựa vào selector.
//Nếu có nhiều thẻ trùng selector thì chỉ lấy 1 thẻ đầu tiên duy nhất.
//nếu không tìm thấy thẻ nào thì trả về undefined. Thường dùng để truy xuất 1 thẻ khớp selector

// var btn = document.getElementById('btnSubmit');
// btn.onclick = function () {
//   alert('submit');
// };

var btn = document.querySelector('#frm button');
btn.onclick = function () {
  alert('submit');
};
/*--------------querySelectorAll----------- */
//querySelectorAll: Truy xuất đến tất cả các thẻ có chứa selector khớp với nó.
// kết quả trả về luôn luôn là 1 mảng các thẻ.
//trong trường hợp chỉ có 1 thẻ khớp với selector kết quả vẫn trả về mảng có 1 phần tử

var btnLogin = document.querySelector('#btnDangNhap');
btnLogin.onclick = function () {
  var arrInput = document.querySelectorAll('#frmLogin input');

  var taiKhoan = arrInput[0].value;
  var matKhau = arrInput[1].value;
  console.log('taiKhoan', taiKhoan);
  console.log('matKhau', matKhau);
};
console.log(btnLogin);

//Luyện tập về mảng
//Bài 1:
var lstNumber = [12, 15, 17, 19, 22, 44, 66, 32, 37, 7, 5, 2];

document.querySelector('.btnInSo').onclick = function () {
  //console.log(123);

  //input: lstNumber : mang

  //output: max: number (66) - indexMax: number (6)
  var indexMax = 0;
  var max = lstNumber[0];
  for (var i = 0; i < lstNumber.length; i++) {
    var num = lstNumber[i];
    if (num > max) {
      max = num; //lưu giá trị
      indexMax = i; //lưu vị trí
    }
  }

  document.querySelector('#ketQua_b1').innerHTML =
    'số lớn nhất là: lstNumber[' + indexMax + '] = ' + max;
};

//Bài tập 2: In tất cả các số lẻ trong mảng
document.querySelector('.btnInSoLe').onclick = function () {
  //output: soLe = []
  var soLe = [];
  for (var i = 0; i < lstNumber.length; i++) {
    var num = lstNumber[i];
    if (num % 2 != 0) {
      soLe.push(num); //nếu là số lẻ thì thêm vào mảng
    }
  }
  document.querySelector('.ketQua_b2').innerHTML = soLe;
};

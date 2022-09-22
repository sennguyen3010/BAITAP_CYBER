// .innerHTML: là phần nội dung giữa 2 thẻ đóng mở <tag>innerHTML</tag>
document.getElementById('txt').innerHTML = 'hello Sen';
/*
phím tắt nhắc lệnh
option + esc
 */
// .value: là nội dung của thẻ input
document.getElementById('iText').value = 'hello bc28';

//.src: là nội dung hình ảnh của thẻ img
document.getElementById('hinhAnh').src = 'https://picsum.photos/id/3/200';

/* function: hàm thực thi khi người dùng thao tác 1 sự kiện
khai báo function
function ten_ham () {
    //nội dung code
}
*/
//global scope
function handleClick() {
  alert(123);
}
//ví dụ 1:
function xuLyViDu1() {
  //function scope
  //DOM: document object model
  var tagP = document.getElementById('pText');

  tagP.innerHTML = 'Đã thay đổi';
  //thay đổi css của thẻ: .style.[thuộc tính css]
  tagP.style.color = 'red';
  tagP.style.fontSize = '30px';
  tagP.className = 'alert alert-danger';
}
/* ví dụ 2:*/
function xuLyViDu2() {
  //   alert(1234);
  var textP = document.getElementById('pViDU2');
  var textH3 = document.getElementById('h3ViDu2');

  textP.style.display = 'none';
  textH3.innerHTML = 'cybersoft frontend';
  textH3.style.border = 'solid 1px black';
  textH3.style.background = 'orange';
  textH3.style.opacity = '0.5';
}
//ví dụ 3
var btnBatDen = document.getElementById('btnBatDen');
btnBatDen.onclick = function () {
  document.getElementById('hinhAnhViDu3').src = '../image/pic_bulbon.gif';
  //xử lý active button
  btnBatDen.className = 'btn btn-success';
  btnTatDen.className = '';
};

var btnTatDen = document.getElementById('btnTatDen');
btnTatDen.onclick = function () {
  document.getElementById('hinhAnhViDu3').src = '../image/pic_bulboff.gif';
  //xử lý active button

  btnTatDen.className = 'btn btn-success';
  btnBatDen.className = '';
};

// bài 1: tính tiền tip
var btnTinhTien = document.getElementById('btnTinh');
btnTinhTien.onclick = function () {
  //input: tổng tiền, %tiền tip, số nv: number
  var tongTien = Number(document.getElementById('tongTienThanhToan').value);
  var phanTramTip = Number(document.getElementById('phanTramTip').value);
  var soNhanVienTip = Number(document.getElementById('soNhanVienTip').value);

  //output: tiền tip: number
  var tienTip = 0;
  //progress
  tienTip = (tongTien * phanTramTip) / 100 / soNhanVienTip;
  //hiển thị kq
  document.getElementById('tienTip').innerHTML = tienTip.toFixed(2) + ' $';
};

//ví dụ 4: tạo thẻ
/* createElement: tạo ra 1 thẻ html (chưa đc hiển thị trên giao diện) 
appendChild: phương thức chèn 1 thẻ từ JS lên giao diện html*/

var id = 1;
document.getElementById('btnCreateSection').onclick = function () {
  //cách 1: tạo ra 1 thẻ html trên giao diện js
  // tạo ra 1 thẻ section
  var tagSection = document.createElement('section');
  tagSection.innerHTML = 'hello';
  tagSection.id = 'section_' + id;
  id++;
  //chèn 1 thẻ vào giao diện
  var divContent = document.getElementById('content_4');
  divContent.appendChild(tagSection);
  console.log(tagSection);
};
// cach 2
// var sHTML =
//   '<section class="alert alert-danger mt-2">Hello cybersoft</section>';
// var divContent = document.getElementById('content_4');
// divContent.innerHTML += sHTML;

//bài 2:

document.getElementById('btnTaoNoiDung').onclick = function () {
  //input
  var text = document.getElementById('txt5').value;
  var colorInput = document.getElementById('color').value;
  console.log(color);
  //cách 1: tạo ra 1 tag dựa vào input
  //progress
  // var textChange = document.createElement('p');
  // textChange.innerHTML = text;
  // textChange.style.color = colorInput;
  // //output
  // var pText = document.getElementById('ketQua_5');
  // pText.appendChild(textChange);

  //cach 2: tạo string
  //output: string html
  var sHTML = '';
  //progress
  sHTML = '<p style="color: ' + colorInput + ';">' + text + '</p>';

  console.log('html', sHTML);
  //hien thi
  document.getElementById('ketQua_5').innerHTML += sHTML;
};

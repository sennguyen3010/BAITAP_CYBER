//console.log(1234);
/* 
Hàm dùng để làm gì?
+ Tái sử dụng lại 1 logic code nào đó
+ Code 1 chương trình chính ngắn hơn khi gọi hàm
+ dễ bảo trì, nâng cấp
+ chia nhỏ vấn đề
*/

//cú pháp khai báo hàm
function inNoiDung(noiDung) {
  //noiDung: param, tham số, input

  console.log(noiDung);
}
var title = 'hello các bạn';
//lệnh gọi hàm
inNoiDung('hello a');
inNoiDung('hello b');
inNoiDung(title);

//ví dụ 1:
// document.getElementById('pText1').innerHTML = 'hello frontend dev';
// document.getElementById('pText1').style.color = 'red';

// document.getElementById('pText2').innerHTML = 'hello backend dev';
// document.getElementById('pText2').style.color = 'green';

// document.getElementById('pText3').innerHTML = 'hello fullstack dev';
// document.getElementById('pText3').style.color = 'blue';
/**
 *
 * @param {*} id: đây là id của 1 thẻ
 * @param {*} content : nội dung
 * @param {*} color : màu sắc
 * @param {*} className : class của thẻ
 */
// các nội dung thay đổi của 1 logic thì đưa ra thành input
function changeContent(id, content, color, className) {
  document.getElementById(id).innerHTML = content;
  document.getElementById(id).style.color = color;
  document.getElementById(id).className = className;
}
//thêm class alert
//gọi hàm
changeContent('pText1', 'hello a', 'red', 'alert alert-success'); //alert alert-success
changeContent('pText2', 'hello b', 'green', 'alert alert-danger'); //alert alert-danger
changeContent('pText3', 'hello c', 'blue', 'alert alert-primary'); //alert alert-primary

//ví dụ 2:

// document.getElementById('btnZoomInHome').onclick = function () {
//   //input: fontSize: number
//   var fSize = document.getElementById('home').style.fontSize;
//   //replace: thay thế 1 chuỗi thành 1 chuỗi khác
//   fSize = Number(fSize.replace('px', ''));

//   //output: tăng fontSize
//   fSize = fSize + 10;
//   document.getElementById('home').style.fontSize = fSize + 'px';
// };

// document.getElementById('btnZoomOutHome').onclick = function () {
//   //input: fontSize: number
//   var fSize = document.getElementById('home').style.fontSize;
//   //replace: thay thế 1 chuỗi thành 1 chuỗi khác
//   fSize = Number(fSize.replace('px', ''));

//   //output: giảm fontSize
//   fSize = fSize - 10;
//   document.getElementById('home').style.fontSize = fSize + 'px';
// };
document.getElementById('btnZoomInHome').onclick = function () {
  changeFontSize('home', 10);
};
document.getElementById('btnZoomOutHome').onclick = function () {
  changeFontSize('home', -10);
};
// nhận vào 1 id
// nhận vào size tăng giảm

function changeFontSize(id, size) {
  //xác định input: id, size
  var fSize = document.getElementById(id).style.fontSize;
  //loại bỏ px của fontsize
  fSize = Number(fSize.replace('px', ''));
  //tăng or giảm size
  fSize += size;
  document.getElementById(id).style.fontSize = fSize + 'px';
}

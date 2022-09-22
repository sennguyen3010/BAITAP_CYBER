//bài 1: Sắp xếp 3 số theo thứ tự tăng dần
// document.getElementById('btnSapXep').onclick = function () {
//   //input:
//   var so1 = Number(document.getElementById('so1').value);
//   var so2 = Number(document.getElementById('so2').value);
//   var so3 = Number(document.getElementById('so3').value);
//   //output:
//   var sapXep = '';
//   //progress
//   if (so1 > so2 && so2 > so3) {
//     sapXep = so3 + ' < ' + so2 + ' < ' + so1;
//   } else if (so1 > so3 && so3 > so2) {
//     sapXep = so2 + ' < ' + so3 + ' < ' + so1;
//   } else if (so2 > so1 && so1 > so3) {
//     sapXep = so3 + ' < ' + so1 + ' < ' + so2;
//   } else if (so2 > so3 && so3 > so1) {
//     sapXep = so1 + ' < ' + so3 + ' < ' + so2;
//   } else if (so3 > so1 && so1 > so2) {
//     sapXep = so2 + ' < ' + so1 + ' < ' + so3;
//   } else {
//     sapXep = so1 + ' < ' + so2 + ' < ' + so3;
//   }
//   document.getElementById('ketQua_b1').innerHTML = sapXep;
// };
var so1 = Number(document.getElementById('so1').value);
var so2 = Number(document.getElementById('so2').value);
var so3 = Number(document.getElementById('so3').value);
var ketQua = document.getElementById('ketQua_b1');
function sapXep3So(so1, so2, so3) {
  document.getElementById('btnSapXep').onclick = function () {
    //input

    // output
    var sapXep = '';
    //progress
    if (so1 > so2 && so2 > so3) {
      sapXep = so3 + ' < ' + so2 + ' < ' + so1;
    } else if (so1 > so3 && so3 > so2) {
      sapXep = so2 + ' < ' + so3 + ' < ' + so1;
    } else if (so2 > so1 && so1 > so3) {
      sapXep = so3 + ' < ' + so1 + ' < ' + so2;
    } else if (so2 > so3 && so3 > so1) {
      sapXep = so1 + ' < ' + so3 + ' < ' + so2;
    } else if (so3 > so1 && so1 > so2) {
      sapXep = so2 + ' < ' + so1 + ' < ' + so3;
    } else {
      sapXep = so1 + ' < ' + so2 + ' < ' + so3;
    }
    ketQua.innerHTML = sapXep;
  };
}
sapXep3So(so1, so2, so3);

//bài 2: viết chương trình chào hỏi
document.getElementById('btnChao').onclick = function () {
  //input
  var thanhVien = document.getElementById('thanhVien').value;
  //output
  var xinChao = '';
  switch (thanhVien) {
    case 'B':
      {
        xinChao = 'Xin chào Bố!';
      }
      break;
    case 'M':
      {
        xinChao = 'Xin chào Mẹ!';
      }
      break;
    case 'A':
      {
        xinChao = 'Xin chào Anh trai!';
      }
      break;
    case 'E':
      {
        xinChao = 'Xin chào Em gái!';
      }
      break;
    default: {
      xinChao = 'Xin chào người lạ!';
    }
  }
  document.getElementById('ketQua_b2').innerHTML = xinChao;
};

//bài 3: Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn.

document.getElementById('btnChanLe').onclick = function () {
  //input
  var number1 = Number(document.getElementById('number1').value);
  var number2 = Number(document.getElementById('number2').value);
  var number3 = Number(document.getElementById('number3').value);
  //output
  var even = 0;
  var odd = 0;
  //progress
  var division1 = Number(number1 % 2);
  var division2 = Number(number2 % 2);
  var division3 = Number(number3 % 2);

  if (division1 == 0 && division2 == 0 && division3 == 0) {
    even += 3;
  } else if (division1 != 0 && division2 != 0 && division3 != 0) {
    even += 0;
  } else if (division1 == 0 && division2 == 0) {
    even += 2;
  } else if (division1 == 0 && division3 == 0) {
    even += 2;
  } else if (division2 == 0 && division3 == 0) {
    even += 2;
  } else {
    even += 1;
  }

  odd = 3 - Number(even);
  document.getElementById('ketQua_b3').innerHTML =
    even + ': số chẵn' + '-' + odd + ': số lẻ';
};

//bài 4: cho nhập 3 cạnh của tam giác. Hãy cho biết đó là tam giác gì

document.getElementById('btnCanh').onclick = function () {
  //input
  var side1 = Number(document.getElementById('side1').value);
  var side2 = Number(document.getElementById('side2').value);
  var side3 = Number(document.getElementById('side3').value);
  //output
  var triangle = '';
  //progress
  if (side1 == side2 && side2 == side3) {
    triangle = 'Tam giác đều';
  } else if (side1 == side2 || side1 == side3 || side2 == side3) {
    triangle = 'Tam giác cân';
  } else if (Math.pow(side3, 2) == Math.pow(side1, 2) + Math.pow(side2, 2)) {
    triangle = 'Tam giác vuông';
  } else {
    triangle = 'Tam giác khác';
  }
  document.getElementById('ketQua_b4').innerHTML = triangle;
};

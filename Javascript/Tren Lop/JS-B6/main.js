/* 
4. yếu tố của vòng lặp
+ giá trị bắt đầu (giá trị này sẽ ảnh hưởng đế điều vòng lặp)
+ điều kiện lặp
+ khối lệnh thực thi
+ xử lý thay đổi giá trị bắt đầu
*/

//ví dụ 1: in ra console.log('Hello) 10 lần
//B1: giá trị băt đầu
var soLan = 1;
while (soLan <= 10) {
  //B2: nhỏ hơn = 10 lần thì làm
  //B3: thực hiện khối xử lý
  console.log('Hello', 'số lần: ', soLan);
  //B4: Thay đổi giá trị lặp
  soLan = soLan + 1;
}

//Tính giai thừa
//5! = 5 * 4 * 3 * 2 * 1

//input: 5
var so = 5;
//output: giaTriGiaThua: number
var giaiThua = 1;

//B1: xác định giá trị bắt đầu
var soHang = 1;

//B2:
while (soHang <= so) {
  //B2: điều kiện lặp
  //B3: tính giai thừa
  giaiThua = giaiThua * soHang;
  //B4: thay đổi giá trị điều kiện lặp
  soHang = soHang + 1;
}
console.log('giaiThua', giaiThua);

//bài1: in số lẻ/ chẵn < 100

// for (var i = 0; i < 100; i++) {
//   var kq = Number(i % 2);
//   if (kq == 0) {
//     console.log('số chẵn: ', i);
//   } else {
//     console.log('số lẽ: ', i);
//   }
// }

//while
// var soN = 100;
// var i = 0;
// var kq = 0;
// while (i < soN) {
//   var kq = Number(i % 2);
//   if (kq == 0) {
//     console.log('số chẵn: ', i);
//   }
//   i = i + 1;
// }

//demo
// var content = '';
// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j < 5; j++) {
//     content += '* ';
//     console.log(content);
//   }
//content += '\n';
// }
//console.log(content);

//bài 2: tính tổng các số chẵn

//bài 1: tính tổng số n
document.getElementById('btnTinhTong').onclick = function () {
  //input:
  var iSo = Number(document.getElementById('iSo1').value);
  //output
  var tong = 0;
  //b1: khai báo giá trị bắt đầu
  var soHang = 1;
  //B2:
  while (soHang <= iSo) {
    //đúng thì lặp sai thì dừng
    //B3: khối lệnh xử lý
    tong = tong + soHang;
    //B4: thay đổi giá trị bắt đầu
    soHang++;
  }
  //in ra giao diện
  document.getElementById('ketQua1').innerHTML = tong;
};

//bài 2: in ra nội dung
document.getElementById('btnInTheDiv').onclick = function () {
  //input
  var iSo2 = Number(document.getElementById('iSo2').value);
  //output: html = '<div>div1</div> <div>div2</div>'
  var html = '';
  for (var i = 1; i <= iSo2; i++) {
    var div = '<div class="alert alert-danger">Hello cybersoft' + i + '</div>';
    //document.write(123);
    html = html + div;
  }
  //in ra giao diện
  document.getElementById('ketQua2').innerHTML = html;
};

//bài 3: số nguyên tố
document.getElementById('btnkiemTraSoNT').onclick = function () {
  //input
  var iSo = Number(document.getElementById('iSo3').value);
  //output: string (iSo không phải là số nguyên tố)
  var ketQua = '';
  //B1: giá trị bắt đầu
  // var dem = 0;
  // var uoc = 1; //bắt đầu ước là 1

  // while (uoc <= iSo) {
  //   //kiểm tra số người dùng nhập ví dụ 10 % ước hay không
  //   if (iSo % uoc == 0) {
  //     // nếu chia hết thì tăng biến đếm
  //     dem = dem + 1;
  //   }
  //   //b4: thay đổi giá trị bắt đầu
  //   uoc++;
  // }
  // //sau khi lặp ktra xem dem số lần có = 2 hay không
  // if (dem == 2) {
  //   ketQua = iSo + 'là số nguyên tố';
  // } else {
  //   ketQua = iSo + 'không phải là số nguyên tố';
  // }
  // //in ra kq
  // document.getElementById('ketQua3').innerHTML = ketQua;

  //cách 2:
  var kiemTraSoNT = true; //kỹ thuật đặt cờ hiệu
  var uoc = 2;

  while (uoc <= iSo / 2) {
    // hoặc sd Math.sqrt(iSo)
    if (iSo % uoc === 0) {
      //nếu có 1 trường hợp xảy ra => nó k còn là số NT
      kiemTraSoNT = false;
      break; //thoát ra khỏi vòng lặp ngay lặp tức
    }
    uoc++;
  }
  if (kiemTraSoNT && iSo != 1) {
    ketQua = iSo + ' là số nguyên tố';
  } else {
    ketQua = iSo + ' không phải là số nguyên tố';
  }
  document.getElementById('ketQua3').innerHTML = ketQua;
};

//bài 4: tính tổng số chẵn
document.getElementById('btnTinhTongSoChan').onclick = function () {
  // var iSo4 = Number(document.getElementById('iSo4').value);
  // var tongSoChan = 0;

  // for (var i = 0; i <= iSo4; i++) {
  //   var kq = Number(i % 2);
  //   if (kq == 0) {
  //     tongSoChan = tongSoChan + i;
  //   }
  // }
  // document.getElementById('ketQua4').innerHTML = tongSoChan;

  //cách 2:
  var iSo = Number(document.getElementById('iSo4').value);
  //output
  var tong = 0;
  //B1: xđ giá trị bắt đầu
  var soHang = 2;
  while (soHang <= iSo) {
    tong = tong + soHang;
    //B4: thay đổi giá trị lặp
    soHang = soHang + 2; // soHang += 2
  }
  document.getElementById('ketQua4').innerHTML = tong;
};

//bài 5: in ngôi sao
document.getElementById('btnInSoSao').onclick = function () {
  var iSo = Number(document.getElementById('soSao').value);
  var html = '';

  // var soLan = 1;
  // while (soLan <= iSo) {
  //   var tagSao = '<i class="fa fa-star text-warning"></i>';
  //   //lấy kết quả nối thêm chuỗi ngôi sao
  //   html += tagSao;
  //   //b4: tăng giá trị lặp
  //   soLan++;
  // }

  //cách 2:
  for (var soLan = 1; soLan <= iSo; soLan++) {
    var tagSao = '<i class="fa fa-star text-warning"></i>';
    //lấy kết quả nối thêm chuỗi ngôi sao
    html += tagSao;
  }
  document.getElementById('ketQua5').innerHTML = html;
};

//bài 6:
document.getElementById('btnInSao_b6').onclick = function () {
  //input
  var soHang = Number(document.getElementById('soHang').value);
  var soCot = Number(document.getElementById('soCot').value);
  //output: string
  var output = '';

  for (var soLanHang = 1; soLanHang <= soHang; soLanHang++) {
    var hangSao = inHangSao(soCot); // *****

    output += hangSao;
    //In ra 1 hàng sao trước
    //B1: tạo ra biến số lần

    // //B2: điều kiện lặp
    // for (var soLan = 1; soLan <= soCot; soLan++) {
    //   //B3: xử lý
    //   output += ' * '; //output = out + ' * '
    // }
    //In ra thẻ br
    output += '<br />';
  }

  document.getElementById('ketQua6').innerHTML = output;
};

//In hàng sao
function inHangSao(soLan) {
  //input: soLan = 5
  var output = '';
  for (var i = 1; i <= soLan; i++) {
    output += ' * ';
  }

  return output; //output
}

//Bài 7: in số nguyên tố
document.getElementById('btnInSoNT').onclick = function () {
  //input
  var so = Number(document.getElementById('nhapSo7').value);
  //output:
  var ketQua = '';

  //B1:
  for (var i = 2; i <= so; i++) {
    //B3: chạy qua 1 con số sẽ ktra số đó có phải số NT hay k, nếu đúng thì mới + vào output
    var kiemTra = kiemTraSoNguyenTo(i);
    if (kiemTra) {
      ketQua += i + ' ';
    }
  }
  document.getElementById('ketQua7').innerHTML = ketQua;
};

//bài toán kt số nt
function kiemTraSoNguyenTo(iSo) {
  //input: 7

  var output = true;

  for (var uoc = 2; uoc <= Math.sqrt(iSo); uoc++) {
    if (iSo % uoc == 0) {
      output = false;
      break;
    }
  }
  return output; //true | false
}

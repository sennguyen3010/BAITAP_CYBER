var number1 = 5; //number
var number2 = 10;
var number3 = 5;
var number4 = '5'; //string
//true, false
//các toán tử (phép tính) so sánh
console.log(number1 == number2); //false
console.log(number1 > number2); //false
console.log(number1 < number2); //true
console.log(number1 != number2); //true
// >= : > hoặc =
console.log(number1 >= number3); //true

console.log(number1 == number4); //true
// === : so sánh cả giá trị và kiểu dữ liệu (lưu ý: khi so sánh trong js thường sd === thay vì ==)
console.log(number1 === number4); //false
console.log(number1 !== number2); //true

var text1 = 'Sang';
var text2 = 'Hoàng';

console.log(text1 > text2); //true

var tNumber1 = '51';
var tNumber2 = '100';

console.log(Number(tNumber1) < Number(tNumber2)); //true

//các phép tính !: phủ định, &&: và, ||: hoặc
var dieuKienA = true;
var dieuKienB = false;
console.log(!dieuKienA);
console.log(dieuKienA && dieuKienB); //false
console.log(dieuKienA || dieuKienB); //true

//bài tập
var n = 5;
console.log(n % 2 === 0); //false
console.log(n % 2 !== 0); //true

console.log(n % 2 === 0 || n > 0); //true
console.log(n % 2 === 0 && n > 0); //false

//ví dụ 1: tính trị tuyệt đối của 1 số dựa vào cấu trúc if
/* 
if (true) {
    khối lệnh đúng mới thực thi
}
*/
var d = -9;
if (d < 0) {
  //thực thi nếu d <0 là đúng thì làm
  d = -d;
}
console.log('d = ', d);

//ví dụ 1
document.getElementById('btnTinhTriTuyetDoi').onclick = function () {
  //input
  var num = Number(document.getElementById('number1').value);
  //output
  var output = num; //kỹ thuật cờ hiệu, lính canh,...
  if (num < 0) {
    output = -num;
  }
  document.getElementById('ketQua1').innerHTML = output;
};

//ví dụ 2: tìm số lớn nhất
document.getElementById('btnSoLonNhat').onclick = function () {
  //input:
  var soThu1 = Number(document.getElementById('soThu1').value);
  var soThu2 = Number(document.getElementById('soThu2').value);
  //output
  var max = 0;
  //progress
  if (soThu1 > soThu2) {
    max = soThu1;
  } else {
    max = soThu2;
  }
  document.getElementById('ketQua2').innerHTML = max;
};

//ví dụ 3: tính điểm trung bình và xếp loại
document.getElementById('btnXepLoai').addEventListener('click', function () {
  //alert(123);
  //input:
  var diemToan = Number(document.getElementById('diemToan').value);
  var diemLy = Number(document.getElementById('diemLy').value);
  var diemHoa = Number(document.getElementById('diemHoa').value);
  //output: (string) gồm: điểm trung bình: number, xepLoai: string
  var diemTrungBinh = 0;
  var xepLoai = '';
  //progress
  diemTrungBinh = (diemToan + diemLy + diemHoa) / 3;
  if (diemTrungBinh < 5) {
    xepLoai = 'yếu';
  } else if (diemTrungBinh >= 5 && diemTrungBinh < 6.5) {
    xepLoai = 'trung bình';
  } else if (diemTrungBinh >= 6.5 && diemTrungBinh < 8) {
    xepLoai = 'khá';
  } else if (diemTrungBinh >= 8 && diemTrungBinh <= 10) {
    xepLoai = 'giỏi';
  } else {
    xepLoai = 'không hợp lệ';
  }
  //in ra giao diện
  document.getElementById('ketQua3').innerHTML =
    'Điểm TB: ' + diemTrungBinh + '- Xếp loại: ' + xepLoai;
});

//bài tập 1: tính lương
document.getElementById('btnTinhLuong').onclick = function () {
  //input
  var soGioLam = Number(document.getElementById('soGioLam').value);
  var luongCB = Number(document.getElementById('luongCB').value);
  //output
  var tienLuong = 0;
  //progress
  if (soGioLam <= 40) {
    tienLuong = soGioLam * luongCB;
  } else {
    tienLuong = 40 * luongCB + (soGioLam - 40) * 1.5 * luongCB;
  }

  document.getElementById('ketQua_b1').innerHTML =
    'Tiền lương = ' + tienLuong.toLocaleString();
};

//biểu thức 3 ngôi
// var n = 5;
// var ketQua = '';
// if (n % 2 === 0) {
//   ketQua = 'số chẵn';
// } else {
//   ketQua = 'số lẻ';
// }

// ketQua = n % 2 === 0 ? 'số chẵn' : 'số lẻ';

//bài 2: tính tiền hàng
document.getElementById('btnTinhTongTien').onclick = function () {
  //input:
  var tenSanPham = document.getElementById('tenSanPham').value;
  var soLuongNhap = Number(document.getElementById('soLuongSanPham').value);
  var donGiaNhap = Number(document.getElementById('donGiaNhap').value);
  //output: tên sp: string, tổng tiền: number
  var tongTien = 0;
  if (soLuongNhap <= 50) {
    tongTien = soLuongNhap * donGiaNhap;
  } else if (soLuongNhap > 50 && soLuongNhap <= 100) {
    tongTien = (soLuongNhap * donGiaNhap * 92) / 100;
  } else {
    tongTien = (soLuongNhap * donGiaNhap * 88) / 100;
  }
  //in ra giao diện
  document.getElementById('ketQua_b2').innerHTML =
    'Tên sp: ' + tenSanPham + '- Tổng tiền nhập: ' + tongTien;
};

//bài 3: đọc số
document.getElementById('btnDocSo').onclick = function () {
  //input
  var soN = Number(document.getElementById('nhapSo').value);
  //output
  var docSo = '';
  //progress
  // if (soN === 1) {
  //   docSo = 'số 1';
  // } else if (soN === 2) {
  //   docSo = 'số 2';
  // } else if (soN === 3) {
  //   docSo = 'số 3';
  // } else if (soN === 4) {
  //   docSo = 'số 4';
  // } else {
  //   docSo = 'không hợp lệ';
  // }
  // document.getElementById('ketQua_b3').innerHTML = docSo;

  //cách 2: xử lý switch case (chỉ áp dụng cho so sánh =)
  switch (soN) {
    case 1:
      {
        docSo = 'số một';
        //break
      }
      break;
    case 2:
      {
        docSo = 'số hai';
      }
      break;
    case 3:
      {
        docSo = 'số ba';
      }
      break;
    case 4:
      {
        docSo = 'số bốn';
      }
      break;
    default: {
      docSo = 'không hợp lệ';
    }
  }
  document.getElementById('ketQua_b3').innerHTML = docSo;
};

//bài 4: in số ngày
document.getElementById('btnInThangNgay').onclick = function () {
  //input
  var thang = Number(document.getElementById('soThang').value);

  //output: tên tháng, số ngày
  var tenThang = '';
  var soNgay = 0;
  //progress
  switch (thang) {
    case 1:
      {
        tenThang = 'tháng một';
        soNgay = 31;
      }
      break;
    case 2:
      {
        tenThang = 'tháng hai';
        soNgay = 28;
      }
      break;
    case 3:
      {
        tenThang = 'tháng ba';
        soNgay = 31;
      }
      break;
    case 4:
      {
        tenThang = 'tháng bốn';
        soNgay = 30;
      }
      break;
    case 5:
      {
        tenThang = 'tháng năm';
        soNgay = 31;
      }
      break;
    case 6:
      {
        tenThang = 'tháng sáu';
        soNgay = 30;
      }
      break;
    case 7:
      {
        tenThang = 'tháng bảy';
        soNgay = 31;
      }
      break;
    case 8:
      {
        tenThang = 'tháng tám';
        soNgay = 31;
      }
      break;
    case 9:
      {
        tenThang = 'tháng chín';
        soNgay = 30;
      }
      break;
    case 10:
      {
        tenThang = 'tháng mười';
        soNgay = 31;
      }
      break;
    case 11:
      {
        tenThang = 'tháng mười một';
        soNgay = 30;
      }
      break;
    case 12:
      {
        tenThang = 'tháng mười hai';
        soNgay = 31;
      }
      break;
    default: {
      tenThang = 'tháng không hợp lệ';
      //soNgay = 'không hợp lệ';
    }
  }
  document.getElementById('ketQua_4').innerHTML =
    tenThang + '-' + soNgay + 'ngày';
};

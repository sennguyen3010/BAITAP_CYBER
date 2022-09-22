//input: mangDiem = arrDiem[], arrTenSinhVien: arrTen: []
var arrTagTdDiem = document.querySelectorAll('#tblBody td:nth-child(4)');
var arrDiem = [];
for (index = 0; index < arrTagTdDiem.length; index++) {
  var diem = Number(arrTagTdDiem[index].innerHTML);
  //Thêm vào input arrDiem
  arrDiem.push(diem);
}

var arrTenSinhVien = document.querySelectorAll('#tblBody td:nth-child(3)');
var arrTen = [];
for (index = 0; index < arrTenSinhVien.length; index++) {
  var ten = arrTenSinhVien[index].innerHTML;
  arrTen.push(ten);
}
document.querySelector('#btnSVCaoDiemNhat').onclick = function () {
  // tìm sinh viên điểm cao nhất
  //output: nguyễn văn a - 9 điểm: string
  var output = '';
  //   var max = arrDiem[0];
  //   var indexMax = 0;
  //   for (index = 0; index < arrDiem.length; index++) {
  //     if (arrDiem[index] > max) {
  //       max = arrDiem[index];
  //       indexMax = index;
  //     }
  //   }

  var indexMax = findIndexMax(arrDiem);
  output =
    'Sinh viên có điểm cao nhất: ' + arrTen[indexMax] + '-' + arrDiem[indexMax];

  document.querySelector('#svGioiNhat').innerHTML = output;
};

// tìm sinh viên điểm thấp nhất
document.querySelector('#btnSVThapDiemNhat').onclick = function () {
  var svThapNhat = '';

  var indexMin = findIndexMin(arrDiem);
  //   var min = arrDiem[0];
  //   var indexMin = 0;
  //   for (index = 0; index < arrDiem.length; index++) {
  //     if (arrDiem[index] < min) {
  //       min = arrDiem[index];
  //       indexMin = index;
  //     }
  //   }
  svThapNhat =
    'Sinh viên có điểm thấp nhất: ' +
    arrTen[indexMin] +
    '-' +
    arrDiem[indexMin];
  document.querySelector('#svYeuNhat').innerHTML = svThapNhat;
};

//đếm số sinh viên giỏi
document.querySelector('#btnSoSVGioi').onclick = function () {
  var svGioi = diemSinhVienGioi(arrDiem, 8);
  document.querySelector('#soSVGioi').innerHTML = svGioi;
};

//Danh sách sv điểm TB lớn hơn 5
document.querySelector('#btnSVDiemHon5').onclick = function () {
  var svDiemHon5 = sinhVienTrungBinh(arrTen, arrDiem, 5);
  document.querySelector('#dsDiemHon5').innerHTML = svDiemHon5;
};

//ví dụ: [9,8,7,4,2]
var arrNumber = [9, 8, 7, 4, 2];
var result = arrNumber.sort(function (pt2, pt1) {
  //return về số dương thì giữ nguyên, return về số âm thì hoán vị
  //   if (pt2 < pt1) {
  //   }
  //   return -1;
  return pt2 - pt1;
});
console.log(result);

var arrString = ['12', '2', '4', 'A', 'B', 'C'];

var result2 = arrString.sort(function (pt2, pt1) {
  var pt1 = pt1.toLowerCase(); //so sánh theo AB (phải chuyển đổi về chữ thường nếu là chữ hoa)
  var pt2 = pt2.toLowerCase(); //so sánh theo AB (phải chuyển đổi về chữ thường nếu là chữ hoa)
  if (pt2 < pt1) {
    return -1;
  }
  return 1;
});
console.log(result2);

//sắp xếp điểm tăng dần
document.querySelector('#btnSapXepTang').onclick = function () {
  var arrDiemSapXep = [];

  arrDiemSapXep = sapXepTangDanSo(arrDiem);
  document.querySelector('#dtbTang').innerHTML = arrDiemSapXep;
};

//hàm tìm số lớn nhất (lodash)
var arrNumber = [5, 4, 9, 10];
var rs = _.max(arrNumber);
console.log('rs: ', rs);

var arrNumber = [];
document.querySelector('#btnNhapSo1').onclick = function () {
  var num = Number(document.querySelector('#nhapSo1').value);
  arrNumber.push(num);
  document.querySelector('#ketQua').innerHTML = arrNumber;
};

//Tổng số dương
document.querySelector('.btnTongSoDuong').onclick = function () {
  var tongSoDuong = 0;
  for (var index = 0; index < arrNumber.length; index++) {
    var num1 = arrNumber[index];
    if (num1 > 0) {
      tongSoDuong += num1;
    }
  }
  document.querySelector('.ketQua1').innerHTML =
    'Tổng số dương: ' + tongSoDuong;
};

// Đếm số dương
document.querySelector('.btnDemSoDuong').onclick = function () {
  var demSoDuong = 0;
  for (var index = 0; index < arrNumber.length; index++) {
    var num2 = arrNumber[index];
    if (num2 > 0) {
      demSoDuong += 1;
    }
  }
  document.querySelector('.ketQua2').innerHTML = 'Số dương: ' + demSoDuong;
};

// Tìm số nhỏ nhất
document.querySelector('.btnSoNhoNhat').onclick = function () {
  var soNhoNhat = arrNumber[0];
  for (var index = 0; index < arrNumber.length; index++) {
    var num3 = arrNumber[index];
    if (num3 < soNhoNhat) {
      soNhoNhat = num3;
    }
  }
  document.querySelector('.ketQua3').innerHTML = 'Số nhỏ nhất: ' + soNhoNhat;
};

// Tìm số dương nhỏ nhất
document.querySelector('.btnSoDuongNhoNhat').onclick = function () {
  var soDuongNhoNhat = 'Không có số dương trong mảng';
  var soDuong = timSoDuong();
  for (var index = 0; index < soDuong.length; index++) {
    soDuongNhoNhat = soDuong[0];
    if (soDuongNhoNhat > soDuong[index]) {
      soDuongNhoNhat = soDuong[index];
    }
  }
  document.querySelector('.ketQua4').innerHTML =
    'Số dương nhỏ nhất: ' + soDuongNhoNhat;
};
function timSoDuong() {
  var soDuong = [];

  for (var index = 0; index < arrNumber.length; index++) {
    var num4 = arrNumber[index];

    if (num4 > 0) {
      soDuong.push(num4);
    }
  }
  return soDuong;
}

// Tìm số chẵn cuối cùng
document.querySelector('.btnSoChan').onclick = function () {
  var soChan = 0;
  for (var index = arrNumber.length - 1; index >= 0; index--) {
    var num5 = arrNumber[index];
    //console.log(num5);
    if (num5 % 2 == 0) {
      soChan = num5;
      break;
    }
  }
  console.log(soChan);
  document.querySelector('.ketQua5').innerHTML = 'Số chẵn cuối cùng: ' + soChan;
};

//Đổi chỗ
document.querySelector('.btnDoiCho').onclick = function () {
  var viTri1 = Number(document.querySelector('.giaTri1').value);
  var viTri2 = Number(document.querySelector('.giaTri2').value);

  var sauDoi = [];

  for (var index = 0; index < arrNumber.length; index++) {
    //arrNumber[viTri1] = arrNumber[index];
    if (index == viTri1) {
      var tam = arrNumber[viTri2];
      arrNumber[viTri2] = arrNumber[viTri1];
      arrNumber[viTri1] = tam;
      sauDoi = arrNumber;
    }
  }
  document.querySelector('.ketQua6').innerHTML = 'Mảng sau đổi: ' + sauDoi;
};

//Sắp xếp tăng dần
document.querySelector('.btnSapXep').onclick = function () {
  for (var index = 0; index < arrNumber.length; index++) {
    arrNumber.sort(function (a, b) {
      return a - b;
    });
  }
  document.querySelector('.ketQua7').innerHTML =
    'Mảng sau khi sắp xếp: ' + arrNumber;
};

// Tìm số nguyên tố đầu tiên trong mảng
document.querySelector('.btnTimSoNT').onclick = function () {
  var soNguyenTo = -1;
  for (var index = 0; index < arrNumber.length; index++) {
    var kiemTra = timSoNguyenTo(arrNumber[index]);
    if (kiemTra && arrNumber[index] >= 2) {
      soNguyenTo = arrNumber[index];
      break;
    }
  }
  document.querySelector('.ketQua8').innerHTML = soNguyenTo;
};
function timSoNguyenTo(iSo) {
  var output = true;
  for (var uoc = 2; uoc <= Math.sqrt(iSo); uoc++) {
    if (iSo % uoc == 0) {
      output = false;
      break;
    }
  }
  return output;
}

//Đếm số nguyên
var mangMoi = [];
document.querySelector('.btnThemSo').onclick = function () {
  var num9 = Number(document.querySelector('.nhapMang').value);
  mangMoi.push(num9);

  document.querySelector('.mangMoi').innerHTML = mangMoi;
};

document.querySelector('.btnDemSoNguyen').onclick = function () {
  var dem = 0;
  for (index = 0; index < mangMoi.length; index++) {
    if (Number.isInteger(mangMoi[index])) {
      dem += 1;
    }
  }
  document.querySelector('.ketQua9').innerHTML = 'Số nguyên: ' + dem;
};

// So sánh số lượng số dương và âm
document.querySelector('.btnSoSanh').onclick = function () {
  var demSoDuong = 0;
  var demSoAm = 0;

  for (index = 0; index < arrNumber.length; index++) {
    var num10 = Number(arrNumber[index]);
    if (num10 > 0) {
      demSoDuong += 1;
    } else if (num10 < 0) {
      demSoAm += 1;
    }
  }
  if (demSoDuong > demSoAm) {
    document.querySelector('.ketQua10').innerHTML = 'Số dương > Số âm';
  } else if (demSoDuong < demSoAm) {
    document.querySelector('.ketQua10').innerHTML = 'Số dương < Số âm';
  } else {
    document.querySelector('.ketQua10').innerHTML = 'Số dương = Số âm';
  }
};

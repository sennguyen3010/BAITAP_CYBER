// bài 1: tính tiền lương

var tongLuong = document.getElementById('tongLuong');
tongLuong.onclick = function () {
  //input:
  var luongMotNgay = 100000;
  var tongLuong = 0;
  //progress:
  tongLuong = luongMotNgay * Number(document.getElementById('soNgayLam').value);
  //output
  document.getElementById('tienLuong').innerHTML = 'Tiền lương: ' + tongLuong;
};

//bài 2: tính giá trị trung bình
var trungBinh = document.getElementById('btnTrungBinh');
btnTrungBinh.onclick = function () {
  //input:
  var so1 = Number(document.getElementById('so1').value);
  var so2 = Number(document.getElementById('so2').value);
  var so3 = Number(document.getElementById('so3').value);
  var so4 = Number(document.getElementById('so4').value);
  var so5 = Number(document.getElementById('so5').value);
  var trungBinh = 0;
  //progress
  trungBinh = (so1 + so2 + so3 + so4 + so5) / 5;
  //output
  document.getElementById('trungBinh').innerHTML =
    'Giá trị trung bình: ' + trungBinh;
};

//bài 3: quy đổi tiền
var quyDoiTien = document.getElementById('btnQuyDoi');
quyDoiTien.onclick = function () {
  //input
  var giaUsd = 23500;
  //progress
  tienVnd = giaUsd * Number(document.getElementById('tienUsd').value);
  //output
  document.getElementById('quyDoiVnd').innerHTML = 'Quy đổi (VND): ' + tienVnd;
};

//bài 4: Tính diện tích, chu vi hình chữ nhật
var tinhChuViDienTich = document.getElementById('btnTinh');
tinhChuViDienTich.onclick = function () {
  //input
  var chieuDai = Number(document.getElementById('chieuDai').value);
  var chieuRong = Number(document.getElementById('chieuRong').value);
  var dienTich = 0;
  var chuVi = 0;
  //progress
  dienTich = chieuDai * chieuRong;
  chuVi = (chieuDai + chieuRong) * 2;
  //output
  document.getElementById('dienTich').innerHTML = 'Diện tích: ' + dienTich;
  document.getElementById('chuVi').innerHTML = 'Chu Vi: ' + chuVi;
};

//bài 5:Tính tổng 2 ký số
var tong = document.getElementById('btnTong');
tong.onclick = function () {
  //input
  var soN = document.getElementById('soN').value;
  //progress
  var soHangChuc = Math.floor(soN / 10);
  var soDonVi = soN % 10;
  tong2So = soHangChuc + soDonVi;
  //output
  document.getElementById('tong').innerHTML = 'Tổng 2 chữ số: ' + tong2So;
};

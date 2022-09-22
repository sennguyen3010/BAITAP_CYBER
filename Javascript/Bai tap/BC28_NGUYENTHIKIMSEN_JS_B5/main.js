//bài 1: quản lý tuyển sinh

//output
var ketQua = '';
var tongDiem = 0;

document.getElementById('btnTinhDiem').onclick = function () {
  tinhTongDiem();
};
// document.addEventListener('click', function () {
//   tinhTongDiem();
// });

function tinhTongDiem() {
  var diemChuan = Number(document.getElementById('diemChuan').value);
  var khuVuc = document.getElementById('KV').value;
  var doiTuong = document.getElementById('DT').value;

  var diemMon1 = Number(document.getElementById('diemMon1').value);
  var diemMon2 = Number(document.getElementById('diemMon2').value);
  var diemMon3 = Number(document.getElementById('diemMon3').value);
  switch (khuVuc) {
    case 'A':
      {
        khuVuc = 2;
      }
      break;
    case 'B':
      {
        khuVuc = 1;
      }
      break;
    case 'C':
      {
        khuVuc = 0.5;
      }
      break;
    default: {
      khuVuc = 0;
    }
  }

  switch (doiTuong) {
    case '1':
      {
        doiTuong = 2.5;
      }
      break;
    case '2':
      {
        doiTuong = 1.5;
      }
      break;
    case '3':
      {
        doiTuong = 1;
      }
      break;
    default: {
      doiTuong = 0;
    }
  }

  tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;

  soSanh(tongDiem, diemChuan, diemMon1, diemMon2, diemMon3);
  ketQua = 'Bạn đã: ' + ketQua + ' - Tổng điểm: ' + tongDiem;
  document.getElementById('ketQua_b1').innerHTML = ketQua;
}
function soSanh(tongDiem, diemChuan, diemMon1, diemMon2, diemMon3) {
  if (
    tongDiem >= diemChuan &&
    diemMon1 !== 0 &&
    diemMon2 !== 0 &&
    diemMon3 !== 0
  ) {
    ketQua = 'Đậu';
  } else {
    ketQua = 'Rớt';
  }
}

//bài 2: Tính tiền điện
var soKw = 0;
var tongTien = 0;

document.getElementById('btnTinh').onclick = function () {
  var hoTen = document.getElementById('ten').value;
  var soKw = Number(document.getElementById('soKw').value);

  tinhTien(soKw, 500, 650, 850, 1100, 1300);
  document.getElementById('ketQua_b2').innerHTML =
    'Họ tên: ' + hoTen + '; Tiền điện: ' + tongTien.toLocaleString();
};

function tinhTien(
  soKw,
  tien50kwDau,
  tien50kwKe,
  tien100kwKe,
  tien150kwKe,
  tienHon
) {
  if (soKw <= 50) {
    tongTien = soKw * tien50kwDau;
  } else if (soKw > 50 && soKw <= 100) {
    tongTien = 50 * tien50kwDau + (soKw - 50) * tien50kwKe;
  } else if (soKw > 100 && soKw <= 200) {
    tongTien = 50 * tien50kwDau + 50 * tien50kwKe + (soKw - 100) * tien100kwKe;
  } else if (soKw > 200 && soKw <= 350) {
    tongTien =
      50 * tien50kwDau +
      50 * tien50kwKe +
      100 * tien100kwKe +
      (soKw - 200) * tien150kwKe;
  } else if (soKw > 350) {
    tongTien =
      50 * tien50kwDau +
      50 * tien50kwKe +
      100 * tien100kwKe +
      150 * tien150kwKe +
      (soKw - 350) * tienHon;
  }
}

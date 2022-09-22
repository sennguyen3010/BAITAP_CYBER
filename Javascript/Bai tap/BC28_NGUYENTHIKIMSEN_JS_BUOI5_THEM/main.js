//Bài 1: Tính thuế thu nhập cá nhân
//input
var hoTen = '';
var thuNhap = 0;
var nguoiPhuThuoc = 0;
//output
var thuNhapSauGiam = 0;
var tienThue = 0;
document.getElementById('btnTinhTienThue').onclick = function () {
  hoTen = document.getElementById('hoTen').value;
  thuNhap = Number(document.getElementById('thuNhap').value);
  nguoiPhuThuoc = Number(document.getElementById('nguoiPhuThuoc').value);

  thuNhapSauGiam = Number(thuNhap - 4e6 - nguoiPhuThuoc * 1.6e6);
  tinhTienThue(thuNhapSauGiam, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35);

  document.getElementById('ketQua_b1').innerHTML =
    'Họ tên: ' +
    hoTen +
    '; Tiền thuế thu nhập cá nhân: ' +
    tienThue.toLocaleString() +
    ' VND';
};
function tinhTienThue(
  thuNhapSauGiam,
  thue5,
  thue10,
  thue15,
  thue20,
  thue25,
  thue30,
  thue35
) {
  if (thuNhapSauGiam <= 60e6) {
    tienThue = thuNhapSauGiam * thue5;
  } else if (thuNhapSauGiam > 60e6 && thuNhapSauGiam <= 120e6) {
    tienThue = thuNhapSauGiam * thue10;
  } else if (thuNhapSauGiam > 120e6 && thuNhapSauGiam <= 210e6) {
    tienThue = thuNhapSauGiam * thue15;
  } else if (thuNhapSauGiam > 210e6 && thuNhapSauGiam <= 384e6) {
    tienThue = thuNhapSauGiam * thue20;
  } else if (thuNhapSauGiam > 384e6 && thuNhapSauGiam <= 624e6) {
    tienThue = thuNhapSauGiam * thue25;
  } else if (thuNhapSauGiam > 624e6 && thuNhapSauGiam <= 960e6) {
    tienThue = thuNhapSauGiam * thue30;
  } else if (thuNhapSauGiam > 960e6) {
    tienThue = thuNhapSauGiam * thue35;
  }
}

//bài 2: Tính tiền cáp

var loaiKH = '';
var maKH = '';
var soKenhCaoCap = 0;
var soKetNoi = 0;

//output
var tienCap = 0;
//progress
function chonLoaiKH() {
  loaiKH = document.getElementById('loaiKH').value;

  switch (loaiKH) {
    case 'doanhNghiep':
      {
        document.getElementById('ketNoi').style.display = 'block';
        tinhTienCap('doanhNghiep', 15, 75, 50, soKenhCaoCap, soKetNoi, 5);
      }
      break;
    case 'nhaDan':
      {
        document.getElementById('ketNoi').style.display = 'none';
        tinhTienCap('nhaDan', 4.5, 20.5, 7.5, soKenhCaoCap, soKetNoi, 0);
      }
      break;
    default: {
      document.getElementById('ketNoi').style.display = 'none';
      tinhTienCap('');
    }
  }
}

function tinhTienCap(
  loaiKH,
  phiHoaDon,
  phiDichVu,
  giaKenhCaoCap,
  soKenhCaoCap,
  soKetNoi,
  giaKetNoi
) {
  document.getElementById('btnTinhTienCap').onclick = function () {
    maKH = document.getElementById('maKH').value;
    soKenhCaoCap = Number(document.getElementById('KenhCaoCap').value);
    soKetNoi = Number(document.getElementById('ketNoi').value);

    switch (loaiKH) {
      case 'nhaDan':
        {
          tienCap = phiHoaDon + phiDichVu + giaKenhCaoCap * soKenhCaoCap;
        }
        break;
      case 'doanhNghiep':
        {
          if (soKetNoi <= 10) {
            tienCap = phiHoaDon + phiDichVu + giaKenhCaoCap * soKenhCaoCap;
          } else if (soKetNoi > 10) {
            tienCap =
              phiHoaDon +
              phiDichVu +
              giaKenhCaoCap * soKenhCaoCap +
              (soKetNoi - 10) * giaKetNoi;
          }
        }
        break;
      default:
        {
          alert('Hãy chọn loại khách hàng');
          tienCap = 0;
        }
        break;
    }
    document.getElementById('ketQua_b2').innerHTML =
      'Mã khách hàng: ' + maKH + '; Tiền cáp: $' + tienCap;
  };
}

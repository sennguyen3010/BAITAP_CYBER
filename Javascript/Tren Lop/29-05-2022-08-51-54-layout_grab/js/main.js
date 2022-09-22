//input: loaiXe, soKm, thoiGianCho
var loaiXe = 'grabCar';
var soKm = 0;
var thoiGianCho = 0;

//output: tongTien
var tongTien = 0;

document.getElementById('grabCar').onclick = function () {
  loaiXe = document.getElementById('grabCar').id;
  console.log(loaiXe);
};

document.getElementById('grabSUV').onclick = function () {
  loaiXe = document.getElementById('grabSUV').id;
  console.log(loaiXe);
};
document.getElementById('grabBlack').onclick = function () {
  loaiXe = document.getElementById('grabBlack').id;
  console.log(loaiXe);
};

document.getElementById('btnTinhTien').onclick = function () {
  tinhTien();
};
function tinhTien() {
  //input đã khai báo khi start ứng dụng
  soKm = Number(document.getElementById('soKM').value);
  thoiGianCho = Number(document.getElementById('thoiGianCho').value);
  //xử lý để có được output
  switch (loaiXe) {
    case 'grabCar':
      {
        // if (soKm <= 1) {
        //   tongTien = 8000 + thoiGianCho * 2000;
        // } else if (soKm > 1 && soKm <= 19) {
        //   tongTien = 7500 * soKm + thoiGianCho * 2000;
        // } else if (soKm > 19) {
        //   tongTien = 7000 * soKm + thoiGianCho * 2000;
        // }
        tinhTongTien(8000, 7500, 7000, 2000);
      }
      break;
    case 'grabSUV':
      {
        // if (soKm <= 1) {
        //   tongTien = 9000 + thoiGianCho * 3000;
        // } else if (soKm > 1 && soKm <= 19) {
        //   tongTien = 8500 * soKm + thoiGianCho * 3000;
        // } else if (soKm > 19) {
        //   tongTien = 8000 * soKm + thoiGianCho * 3000;
        // }
        tinhTongTien(9000, 8500, 8000, 3000);
      }
      break;
    case 'grabBlack':
      {
        // if (soKm <= 1) {
        //   tongTien = 10000 + thoiGianCho * 3500;
        // } else if (soKm > 1 && soKm <= 19) {
        //   tongTien = 9500 * soKm + thoiGianCho * 3500;
        // } else if (soKm > 19) {
        //   tongTien = 9000 * soKm + thoiGianCho * 3500;
        // }
        tinhTongTien(10000, 9500, 9000, 3500);
      }
      break;
    default: {
      console.log('chọn loại xe');
    }
  }
  document.getElementById('divThanhTien').style.display = 'block';
  document.getElementById('xuatTien').innerHTML = tongTien.toLocaleString();
}
//   console.log(tongTien);
////gán các giá trị lên phần div in(div#printDiv)

document.getElementById('btnInHoaDon').onclick = function () {
  tinhTien();

  document.getElementById('demoGrab').style.display = 'none';
  document.getElementById('printDiv').style.display = 'block';

  document.getElementById('td-loaiXe').innerHTML = loaiXe;
  document.getElementById('td-soKM').innerHTML = soKm;
  document.getElementById('td-thoiGianCho').innerHTML = thoiGianCho;
  document.getElementById('td-tongTien').innerHTML = tongTien.toLocaleString();

  window.print();

  document.getElementById('demoGrab').style.display = 'flex';
  document.getElementById('printDiv').style.display = 'none';
};

function tinhTongTien(tien1KM, tienIthon19KM, tienHon19Km, tienCho) {
  //input
  if (soKm <= 1) {
    tongTien = tien1KM + thoiGianCho * tienCho;
  } else if (soKm > 1 && soKm <= 19) {
    tongTien = tienIthon19KM * soKm + thoiGianCho * tienCho;
  } else if (soKm > 19) {
    tongTien = tienHon19Km * soKm + thoiGianCho * tienCho;
  }
  return tongTien; //output 18000
}

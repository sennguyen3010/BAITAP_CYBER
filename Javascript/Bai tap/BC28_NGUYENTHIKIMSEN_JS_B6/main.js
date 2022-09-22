//bài 1: tìm số nguyên dương nhỏ nhất
document.getElementById('btnSoNhoNhat').onclick = function () {
  var soHang = 0;
  var sum = 0;

  while (sum < 10000) {
    sum += soHang;
    soHang++;
  }

  document.getElementById('ketQua_b1').innerHTML = --soHang;
};

//bài 2: tính tổng

document.getElementById('btnTinhTong').onclick = function () {
  tinhTong();
};
function tinhTong() {
  var iSoX = 0;
  var iSoN = 0;
  var sumB2 = 0;

  iSoX = Number(document.getElementById('iSoX').value);
  iSoN = Number(document.getElementById('iSoN').value);

  for (var i = 1; i <= iSoN; i++) {
    sumB2 += iSoX ** i;
  }
  document.getElementById('ketQua2').innerHTML = 'Tổng: ' + sumB2;
}

//bài 3: tính giai thừa
document.getElementById('btnTinhGiaiThua').onclick = function () {
  var iSoN3 = 0;
  var giaiThua = 1;

  iSoN3 = Number(document.getElementById('iSoN3').value);
  for (var i = 2; i <= iSoN3; i++) {
    giaiThua = giaiThua * i;
  }
  document.getElementById('ketQua3').innerHTML = 'Giai thừa: ' + giaiThua;
};

//bài 4: Tạo thẻ Div
document.getElementById('btnInTheDiv').onclick = function () {
  var html = '';

  for (var i = 1; i <= 10; i++) {
    if (Number(i % 2) != 0) {
      var tagDivLe =
        '<div style="background-color: #0d6efd; color: white; padding: 4px">Div lẻ' +
        '</div>';
      html += tagDivLe;
    } else {
      var tagDivChan =
        '<div style="background-color: #dd3444; color: white; padding: 4px">Div chẵn' +
        '</div>';
      html += tagDivChan;
    }
  }
  document.getElementById('ketQua4').innerHTML = html;
};

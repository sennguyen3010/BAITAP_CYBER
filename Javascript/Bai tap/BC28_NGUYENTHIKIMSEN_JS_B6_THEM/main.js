document.getElementById('btnInSo').onclick = function () {
  var iSo = Number(document.getElementById('iSo').value);
  var ketQua = '';
  for (var i = 2; i <= iSo; i++) {
    var kiemTraSoNT = true;
    var uoc = 2;
    while (uoc <= i / 2) {
      if (i % uoc === 0) {
        //nếu có 1 trường hợp xảy ra => nó k còn là số NT
        kiemTraSoNT = false;
        break; //thoát ra khỏi vòng lặp ngay lặp tức
      }
      uoc++;
    }
    if (kiemTraSoNT && i != 1) {
      ketQua += i.toString() + ' ';
    } else {
      ketQua = ketQua;
    }
  }
  document.getElementById('ketQua5').innerHTML = ketQua;
};

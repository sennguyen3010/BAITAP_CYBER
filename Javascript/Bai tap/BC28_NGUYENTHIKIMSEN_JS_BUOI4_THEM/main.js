//bài 1:Tìm ngày, tháng, năm của ngày tiếp theo và của ngày trước đó.
document.getElementById('btnNgayHomQua').onclick = function () {
  //input:
  var day = Number(document.getElementById('day').value);
  var month = Number(document.getElementById('month').value);
  var year = Number(document.getElementById('year').value);
  //output
  //progress
  if (day >= 2 && day <= 28 && month == 2) {
    day = --day;
  } else if (
    day >= 2 &&
    day <= 30 &&
    (month == 4 || month == 6 || month == 9 || month == 11)
  ) {
    day = --day;
  } else if (
    day >= 2 &&
    day <= 31 &&
    (month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10 ||
      month == 12)
  ) {
    day = --day;
  } else if (day == 1) {
    switch (month) {
      case 1:
        {
          day = '31';
          month = '12';
          year = --year;
        }
        break;
      case 2:
        {
          day = '31';
          month = '1';
        }
        break;
      case 3:
        {
          day = '28';
          month = '2';
        }
        break;
      case 4:
        {
          day = '31';
          month = '3';
        }
        break;
      case 5:
        {
          day = '30';
          month = '4';
        }
        break;
      case 6:
        {
          day = '31';
          month = '5';
        }
        break;
      case 7:
        {
          day = '30';
          month = '6';
        }
        break;
      case 8:
        {
          day = '31';
          month = '7';
        }
        break;
      case 9:
        {
          day = '31';
          month = '8';
        }
        break;
      case 10:
        {
          day = '30';
          month = '9';
        }
        break;
      case 11:
        {
          day = '31';
          month = '10';
        }
        break;
      case 12:
        {
          day = '30';
          month = '11';
        }
        break;
      default: {
        month = 'tháng không hợp lệ';
      }
    }
  } else {
    day = 'ngày không hợp lệ';
  }

  document.getElementById('ketQua_b1').innerHTML =
    day + ' / ' + month + ' / ' + year;
};

//ngày mai
document.getElementById('btnNgayMai').onclick = function () {
  //input:
  var day = Number(document.getElementById('day').value);
  var month = Number(document.getElementById('month').value);
  var year = Number(document.getElementById('year').value);
  //progress
  if (day >= 1 && day <= 27 && month == 2) {
    day = ++day;
  } else if (
    day >= 1 &&
    day <= 29 &&
    (month == 4 || month == 6 || month == 9 || month == 11)
  ) {
    day = ++day;
  } else if (
    day >= 1 &&
    day <= 30 &&
    (month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10 ||
      month == 12)
  ) {
    day = ++day;
  } else if (day == 30) {
    switch (month) {
      case 4:
        {
          day = '1';
          month = '5';
        }
        break;
      case 6:
        {
          day = '1';
          month = '7';
        }
        break;
      case 9:
        {
          day = '1';
          month = '10';
        }
        break;
      case 11:
        {
          day = '1';
          month = '12';
        }
        break;
      default: {
        month = 'tháng không hợp lệ';
      }
    }
  } else if (day == 31) {
    switch (month) {
      case 1:
        {
          day = '1';
          month = '2';
        }
        break;
      case 3:
        {
          day = '1';
          month = '4';
        }
        break;
      case 5:
        {
          day = '1';
          month = '6';
        }
        break;
      case 7:
        {
          day = '1';
          month = '8';
        }
        break;
      case 8:
        {
          day = '1';
          month = '9';
        }
        break;
      case 10:
        {
          day = '1';
          month = '11';
        }
        break;
      case 12:
        {
          day = '1';
          month = '1';
          year = ++year;
        }
        break;
      default: {
        month = 'tháng không hợp lệ';
      }
    }
  } else if (day == 28 && month == 2) {
    day = '1';
    month = ++month;
  } else {
    day = 'ngày không hợp lệ';
  }

  document.getElementById('ketQua_b1').innerHTML =
    day + ' / ' + month + ' / ' + year;
};

//bài 2: tính ngày
document.getElementById('btnTinhNgay').onclick = function () {
  //input
  var month2 = Number(document.getElementById('month2').value);
  var year2 = Number(document.getElementById('year2').value);
  //output
  var day2 = 0;
  //progress
  if (
    month2 === 1 ||
    month2 === 3 ||
    month2 === 5 ||
    month2 === 7 ||
    month2 === 8 ||
    month2 === 10 ||
    month2 === 12
  ) {
    day2 = 31;
  } else if (month2 === 4 || month2 === 6 || month2 === 9 || month2 === 11) {
    day2 = 30;
  } else if (month2 === 2) {
    if (
      (year2 % 4 === 0 && year2 % 100 !== 0) ||
      (year2 % 400 === 0 && year2 % 100 === 0)
    ) {
      day2 = 29;
    } else {
      day2 = 28;
    }
  } else {
    month2 = 'không hợp lệ';
  }
  document.getElementById('ketQua_b2').innerHTML =
    'Tháng ' + month2 + ' năm ' + year2 + ' có ' + day2 + ' ngày';
};

//bài 3: đọc số
document.getElementById('btnDocSo').onclick = function () {
  //input
  var soN = Number(document.getElementById('soN').value);
  //output
  //progress
  var hangTram = Number(Math.floor(soN / 100));
  var hangChuc = Number(Math.floor((soN % 100) / 10));
  var hangDonVi = Number(soN % 10);

  var docHangTram = '';

  switch (hangTram) {
    case 0:
      {
        docHangTram = '';
      }
      break;
    case 1:
      {
        docHangTram = 'Một trăm';
      }
      break;
    case 2:
      {
        docHangTram = 'Hai trăm';
      }
      break;
    case 3:
      {
        docHangTram = 'Ba trăm';
      }
      break;
    case 4:
      {
        docHangTram = 'Bốn trăm';
      }
      break;
    case 5:
      {
        docHangTram = 'Năm trăm';
      }
      break;
    case 6:
      {
        docHangTram = 'Sáu trăm';
      }
      break;
    case 7:
      {
        docHangTram = 'Bảy trăm';
      }
      break;
    case 8:
      {
        docHangTram = 'Tám trăm';
      }
      break;
    case 9:
      {
        docHangTram = 'Chín trăm';
      }
      break;
    // default: {
    //   hangTram = 'Không xác định';
    // }
  }

  var docHangChuc = '';

  switch (hangChuc) {
    case 0:
      {
        if (hangTram > 0 && hangDonVi > 0) {
          docHangChuc = 'lẻ';
        } else if (hangTram === 0 && hangDonVi > 0) {
          docHangChuc = '';
        } else {
          docHangChuc = '';
        }
      }
      break;
    case 1:
      {
        docHangChuc = 'mười';
      }
      break;
    case 2:
      {
        docHangChuc = 'hai mươi';
      }
      break;
    case 3:
      {
        docHangChuc = 'ba mươi';
      }
      break;
    case 4:
      {
        docHangChuc = 'bốn mươi';
      }
      break;
    case 5:
      {
        docHangChuc = 'năm mươi';
      }
      break;
    case 6:
      {
        docHangChuc = 'sáu mươi';
      }
      break;
    case 7:
      {
        docHangChuc = 'bảy mươi';
      }
      break;
    case 8:
      {
        docHangChuc = 'tám mươi';
      }
      break;
    case 9:
      {
        docHangChuc = 'chín mươi';
      }
      break;
    default: {
      docHangChuc = 'không xác định';
    }
  }
  switch (hangDonVi) {
    case 0:
      {
        hangDonVi = '';
      }
      break;
    case 1:
      {
        if (hangTram === 0 && hangChuc === 0) {
          hangDonVi = 'một';
        } else if (hangTram > 0 && hangChuc === 0) {
          hangDonVi = 'một';
        } else {
          hangDonVi = 'mốt';
        }
      }
      break;
    case 2:
      {
        hangDonVi = 'hai';
      }
      break;
    case 3:
      {
        hangDonVi = 'ba';
      }
      break;
    case 4:
      {
        hangDonVi = 'bốn';
      }
      break;
    case 5:
      {
        hangDonVi = 'năm';
      }
      break;
    case 6:
      {
        hangDonVi = 'sáu';
      }
      break;
    case 7:
      {
        hangDonVi = 'bảy';
      }
      break;
    case 8:
      {
        hangDonVi = 'tám';
      }
      break;
    case 9:
      {
        hangDonVi = 'chín';
      }
      break;
    default: {
      hangDonVi = 'không hợp lệ';
    }
  }
  document.getElementById('ketQua_b3').innerHTML =
    docHangTram + ' ' + docHangChuc + ' ' + hangDonVi;
};

//bài 4: tìm sinh viên xa trường nhất
function getEle(id) {
  return document.querySelector(id);
}
document.getElementById('btnTim').onclick = function () {
  ketQua();
};

function ketQua() {
  var ten = getEle('#ketQua_b4');
  var tenSV1 = getEle('#tenSinhVien1').value;
  var tenSV2 = getEle('#tenSinhVien2').value;
  var tenSV3 = getEle('#tenSinhVien3').value;
  var toaDoXSv1 = Number(getEle('#toaDoX_Sv1').value);
  var toaDoYSv1 = Number(getEle('#toaDoY_Sv1').value);
  var toaDoXSv2 = Number(getEle('#toaDoX_Sv2').value);
  var toaDoYSv2 = Number(getEle('#toaDoY_Sv2').value);
  var toaDoXSv3 = Number(getEle('#toaDoX_Sv3').value);
  var toaDoYSv3 = Number(getEle('#toaDoY_Sv3').value);
  var toaDoXTruong = Number(getEle('#toaDoX_Truong').value);
  var toaDoYTruong = Number(getEle('#toaDoY_Truong').value);
  var toaDoSV1 = timToaDo(toaDoXTruong, toaDoYTruong, toaDoXSv1, toaDoYSv1);
  var toaDoSV2 = timToaDo(toaDoXTruong, toaDoYTruong, toaDoXSv2, toaDoYSv2);
  var toaDoSV3 = timToaDo(toaDoXTruong, toaDoYTruong, toaDoXSv3, toaDoYSv3);

  var kQ = soSanhKhoangCach(
    tenSV1,
    tenSV2,
    tenSV3,
    toaDoSV1,
    toaDoSV2,
    toaDoSV3
  );
  ten.innerHTML = 'Sinh viên xa nhất: ' + kQ;
}
function timToaDo(toaDoXTruong, toaDoYTruong, toaDoX, toaDoY) {
  //xác định khoảng cách
  var khoangCach = Math.sqrt(
    Math.pow(toaDoXTruong - toaDoX, 2) + Math.pow(toaDoYTruong - toaDoY, 2)
  );
  return khoangCach;
}
function soSanhKhoangCach(tenSV1, tenSV2, tenSV3, d1, d2, d3) {
  if (d1 > d2 && d1 > d3) {
    return tenSV1;
  } else if (d2 > d1 && d2 > d3) {
    return tenSV2;
  } else {
    return tenSV3;
  }
}

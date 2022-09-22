/**
 * hàm nhận vào input là 1 mảng number ví dụ: [1,5,3,2,4] trả ra vị trí của số lớn nhất
 * @param {*} arrNumber
 * @returns trả ra vị trí index của giá trị lớn nhất
 */
function findIndexMax(arrNumber) {
  //input: arrNumber:[1,2,3,4,5]
  var indexMax = 0;
  //progress
  var max = arrNumber[0];
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] > max) {
      indexMax = index;
    }
  }
  return indexMax;
}

/**
 * hàm nhận vào input là 1 mảng number ví dụ: [1,5,3,2,4] trả ra vị trí của số nhỏ nhất
 * @param {*} arrNumber
 * @returns trả ra vị trí index của giá trị lớn nhất
 */
function findIndexMin(arrNumber) {
  //input: arrNumber:[1,2,3,4,5]
  var indexMin = 0;
  //progress
  var min = arrNumber[0];
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] < min) {
      indexMin = index;
    }
  }
  return indexMin;
}

/**
 * Hàm nhận vào arrNumber (danh sách điểm), và diemGioi (điểm quy định bn là giỏi)
 * @param {*} arrNumber là danh sách điểm ví dụ [4,2,5,6]
 * @param {*} diemGioi laf qui định điểm bn là giỏi ví dụ 8 là giỏi
 * @returns kết quả trả ra là số lượng sinh viên có điểm >= điểm giỏi
 */
function diemSinhVienGioi(arrNumber, diemGioi) {
  var count = 0;
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] >= diemGioi) {
      count++;
    }
  }
  return count;
}
/**
 *
 * @param {*} arrTen
 * @param {*} arrDiem
 * @param {*} diemTrungBinh
 * @returns danh sách sinh viên trên 5, ví dụ: [B] + <br/> + [C]
 */
function sinhVienTrungBinh(arrTen, arrDiem, diemTrungBinh) {
  var output = '';
  var tenSvTB = '';
  var diemTB = 0;
  for (var index = 0; index < arrDiem.length; index++) {
    if (arrDiem[index] > diemTrungBinh) {
      tenSvTB = arrTen[index];
      diemTB = arrDiem[index];
      output += tenSvTB + ': ' + diemTB + '<br/>';
    }
  }
  return output;
}

//sắp xếp tăng dần
// function sapXepTangDan(arrDiem) {
//   for (var index = 0; index < arrDiem.length; index++) {
//     arrDiem.sort(function (a, b) {
//       return a - b;
//     });
//   }
// }

/**
 * Hàm nhận vào 1 arrNumber (mảng số nguyên) trả ra mảng đó sắp xếp tăng dần
 * @param {} arrNumber là 1 mảng số nguyên chưa sắp xếp
 * @returns trả về 1 mảng đã sắp xếp
 */

function sapXepTangDanSo(arrNumber) {
  var arrResult = [];

  arrResult = arrNumber.sort(function (pt2, pt1) {
    return pt2 - pt1;
  });

  return arrResult;
}

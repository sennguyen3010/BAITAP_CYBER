// MVC: Mô hình quản lý project

//M : Models chứa các file class (prototype) - lớp đối tượng, mỗi class đối tượng là 1 file
//V : View là nơi chứa các file html (giao diện html)
//C : Controllers là nơi chứa các file xử lý cho giao diện cùng tên

//Bài tập quản lý sinh viên

var mangSinhVien = []; // [sv1,sv2,sv3] => [{maSinhVien:'01',tenSinhVien:'nguyenvana'}, {maSinhVien:'02',tenSinhVien:'nguyenvanb'},...]
//                                                  0                                       1
document.querySelector('#btnThemSinhVien').onclick = function () {
  //input: thông tin sinh viên: SinhVien
  var sv = new SinhVien();
  console.log('svc csdcd:', sv);
  //Lấy thông tin từ giao diện đưa vào input sv
  sv['maSinhVien'] = document.querySelector('#maSinhVien').value;
  sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
  sv.email = document.querySelector('#email').value;
  sv.matKhau = document.querySelector('#matKhau').value;
  sv.khoaHoc = document.querySelector('#khoaHoc').value;
  //11-01-1999
  var ngaySinh = new Date(document.querySelector('#ngaySinh').value);
  // console.log(  ngaySinh.toLocaleDateString());
  sv.ngaySinh = ngaySinh.toLocaleDateString();
  sv.diemToan = document.querySelector('#diemToan').value;
  sv.diemLy = document.querySelector('#diemLy').value;
  sv.diemHoa = document.querySelector('#diemHoa').value;
  //   console.log(sv);

  // -------- bắt lỗi khi người dùng nhập k hợp lệ
  var valid = true;

  valid &=
    kiemTraRong(sv.maSinhVien, '#error_required_maSinhVien', 'Mã sinh viên') &
    kiemTraRong(
      sv.tenSinhVien,
      '#error_required_tenSinhVien',
      'Tên sinh viên'
    ) &
    kiemTraRong(sv.email, '#error_required_email', 'Email') &
    kiemTraRong(sv.ngaySinh, '#error_required_ngaySinh', 'Ngày sinh') &
    kiemTraRong(sv.matKhau, '#error_required_matKhau', 'Mật khẩu') &
    kiemTraRong(sv.khoaHoc, '#error_required_khoaHoc', 'Khoá học') &
    kiemTraRong(sv.diemToan, '#error_required_diemToan', 'Điểm toán') &
    kiemTraRong(sv.diemLy, '#error_required_diemLy', 'Điểm lý') &
    kiemTraRong(sv.diemHoa, '#error_required_diemHoa', 'Điểm hoá');

  //kiểm tra độ dài
  valid &= kiemTraDoDai(
    sv.matKhau,
    '#err_matKhau_min_max_length',
    'Mật khẩu',
    6,
    32
  );

  //kiểm tra giá trị
  valid &= kiemTraGiaTri(
    sv.diemToan,
    '#err_min_max_diemToan',
    'Điểm toán',
    0,
    10
  );

  //kiểm tra định dạng

  var ngaySinhTest = moment(ngaySinh).format('YYYY-MM-DD');
  valid &=
    kiemTraTatCaKyTu(
      sv.tenSinhVien,
      '#error_all_letter_tenSinhVien',
      'Tên sinh viên'
    ) &
    kiemTraTatCaSo(sv.diemToan, '#err_diemToan', 'Điểm toán') &
    kiemTraTatCaSo(sv.diemLy, '#err_diemLy', 'Điểm lý') &
    kiemTraTatCaSo(sv.diemHoa, '#err_diemHoa', 'Điểm hoá') &
    kiemTraEmail(sv.email, '#err_email', 'email') &
    kiemTraMatKhau(sv.matKhau, '#err_password', 'Mật khẩu') &
    kiemTraNgayThangNam(ngaySinhTest, '#error_required_ngaySinh', 'Ngày sinh');

  // if (sv.maSinhVien.trim() === '') {
  //   document.querySelector('#error_required_maSinhVien').innerHTML =
  //     'Mã sinh viên không được bỏ trống';
  //   valid = false;
  // } else {
  //   document.querySelector('#error_required_maSinhVien').innerHTML = '';
  // }
  // if (sv.tenSinhVien.trim() === '') {
  //   document.querySelector('#error_required_tenSinhVien').innerHTML =
  //     'Tên sinh viên không được bỏ trống';
  //   valid = false;
  // } else {
  //   document.querySelector('#error_required_tenSinhVien').innerHTML = '';
  // }

  //kiểm tra biến cờ
  if (!valid) {
    return;
  }

  //Cách 2 : chuỗi innerHTML
  mangSinhVien.push(sv);

  //   console.log('mangSinhVien', mangSinhVien);
  //Sau khi thêm 1 sinh viên => mảng có sinh viên [{},{}]
  renderTableSinhVien(mangSinhVien);
  //Sau khi thêm sinh viên thành công => lưu mảng sinh viên vào localstorage
  var sMangSinhVien = JSON.stringify(mangSinhVien);
  luuLocalStorage('mangSinhVien', sMangSinhVien);
};

function renderTableSinhVien(arrSinhVien) {
  //input: arrSinhVien: [{},{},{}]
  //output: html = '<tr><td></td> ....</tr>'
  var htmlContent = '';
  //Duyệt qua các object của mảng sinh viên
  for (var index = 0; index < arrSinhVien.length; index++) {
    var sv = arrSinhVien[index]; //Mỗi lần duyệt lấy ra 1 object thứ index của arrSinhVien [{0},{1},{2}]
    //Từ object tạo ra thẻ tr
    //Nếu bấm từ nút thêm (dc new từ SinhVien => nên sẽ có tinhDiemTrungBinh)
    //Nếu lấy từ localstorage thì bị mất phương thức tinhDiemTrungBinh
    //.hasOwnProperty('ten_thuoc_tinh'): Nếu có tên thuộc tính đó trong object thì trả về giá trị true, không có trả về false
    if (!sv.hasOwnProperty('tinhDiemTrungBinh')) {
      //.__proto__: mở rộng thuộc tính của object
      sv.tinhDiemTrungBinh = function () {
        var diemTB =
          (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) /
          3;
        return diemTB;
      };
    }

    var tr = `
            <tr>
                <td>${sv.maSinhVien}</td>
                <td>${sv.tenSinhVien}</td>
                <td>${sv.email}</td>
                <td>${sv.ngaySinh}</td>
                <td>${sv.khoaHoc}</td>
                <td>${sv.tinhDiemTrungBinh()}</td>
                <td>
                    <button class="btn btn-danger" onclick="xoaSinhVien('${index}')">Xoá</button>
                    <button class="btn btn-danger ml-2" onclick="xoaSinhVienTheoMa('${
                      sv.maSinhVien
                    }')">Xoá Mã SV</button>
                    <button class="btn btn-primary ml-2" onclick="suaSinhVien('${
                      sv.maSinhVien
                    }')">Sửa</button>
                </td>
            </tr>
        `;
    //Mỗi lần tạo xong thẻ tr sẽ + vào output
    htmlContent += tr;
  }

  document.querySelector('#tblSinhVien').innerHTML = htmlContent;
}

//mangSinhVien = [{maSinhVien:1,tenSinhVien:'nguyễn văn a',...},{maSinhVien:2,tenSinhVien:'nguyễn văn b',...},{maSinhVien:3,tenSinhVien:'nguyễn văn c',...}]
function suaSinhVien(maSinhVienClick) {
  // alert(maSinhVienClick);
  for (var index = 0; index < mangSinhVien.length; index++) {
    //Mỗi lần duyệt lấy ra 1 sinh viên object
    var sinhVien = mangSinhVien[index];
    //Đem mã sinh viên click so sánh với thằng object sinh viên lấy ra
    if (maSinhVienClick == sinhVien.maSinhVien) {
      //Tìm thấy
      //Gán các giá trị từ object lên các thẻ input
      document.querySelector('#maSinhVien').value = sinhVien.maSinhVien;
      document.querySelector('#tenSinhVien').value = sinhVien.tenSinhVien;
      document.querySelector('#email').value = sinhVien.email;
      document.querySelector('#matKhau').value = sinhVien.matKhau;
      var value = moment(sinhVien.ngaySinh).format('YYYY-MM-DD');
      // console.log(value)
      document.querySelector('#ngaySinh').value = value;
      document.querySelector('#khoaHoc').value = sinhVien.khoaHoc;
      document.querySelector('#diemToan').value = sinhVien.diemToan;
      document.querySelector('#diemLy').value = sinhVien.diemLy;
      document.querySelector('#diemHoa').value = sinhVien.diemHoa;
      break;
    }
  }
}
//mangSinhVien = [{maSinhVien:1,tenSinhVien:'nguyễn văn a',...},{maSinhVien:2,tenSinhVien:'nguyễn văn b',...},{maSinhVien:3,tenSinhVien:'nguyễn văn c',...}]

document.getElementById('btnCapNhatSinhVien').onclick = function () {
  //Lấy dữ liệu từ người dùng nhập vào sau khi chỉnh sửa
  var sinhVienCapNhat = new SinhVien();
  sinhVienCapNhat.maSinhVien = document.querySelector('#maSinhVien').value;
  sinhVienCapNhat.tenSinhVien = document.querySelector('#tenSinhVien').value;
  sinhVienCapNhat.email = document.querySelector('#email').value;
  sinhVienCapNhat.matKhau = document.querySelector('#matKhau').value;
  sinhVienCapNhat.khoaHoc = document.querySelector('#khoaHoc').value;
  //11-01-1999
  var ngaySinh = new Date(document.querySelector('#ngaySinh').value);
  // console.log(  ngaySinh.toLocaleDateString());
  sinhVienCapNhat.ngaySinh = ngaySinh.toLocaleDateString();
  sinhVienCapNhat.diemToan = document.querySelector('#diemToan').value;
  sinhVienCapNhat.diemLy = document.querySelector('#diemLy').value;
  sinhVienCapNhat.diemHoa = document.querySelector('#diemHoa').value;
  //   console.log(sinhVienCapNhat);
  //Duyệt qua mảng tìm ra object sinhVien cần cập nhật
  for (var index = 0; index < mangSinhVien.length; index++) {
    //Mỗi lần duyệt lấy ra 1 sinh viên trong mảng
    var svMang = mangSinhVien[index];
    if (svMang.maSinhVien === sinhVienCapNhat.maSinhVien) {
      //Đem dữ liệu trong mảng sửa thành dữ liệu người dùng thay đổi
      svMang.tenSinhVien = sinhVienCapNhat.tenSinhVien;
      svMang.email = sinhVienCapNhat.email;
      svMang.matKhau = sinhVienCapNhat.matKhau;
      svMang.khoaHoc = sinhVienCapNhat.khoaHoc;
      svMang.ngaySinh = sinhVienCapNhat.ngaySinh;
      svMang.diemToan = sinhVienCapNhat.diemToan;
      svMang.diemLy = sinhVienCapNhat.diemLy;
      svMang.diemHoa = sinhVienCapNhat.diemHoa;
      //...
      //Sau khi cập nhật sinh viên trong mảng thì gọi hàm render lại table
      renderTableSinhVien(mangSinhVien);
      break;
    }
  }
};

function xoaSinhVien(index) {
  // alert(maSVclick);
  mangSinhVien.splice(index, 1); // [{0},{2}]
  //Sau khi xoá sinh viên xong thì tạo lại bảng
  renderTableSinhVien(mangSinhVien);
}

//mangSinhVien = [0,1,2,3,4,5,6,7,9,10,11,12]

function xoaSinhVienTheoMa(maSV) {
  var viTriXoa = -1;
  for (var index = mangSinhVien.length - 1; index >= 0; index--) {
    //Mỗi lần duyệt lấy ra 1 sinh viên
    var sinhVien = mangSinhVien[index];
    if (sinhVien.maSinhVien == maSV) {
      //nếu obj sinh viên trong mảng == với lại mã sinh viên được click thì lấy ra vị trí
      // viTriXoa = index;
      // break;
      mangSinhVien.splice(viTriXoa, 1);
    }
  }
  //Sau khi xoá tạo lại table mới
  renderTableSinhVien(mangSinhVien);
}

//Lưu thông tin vào localstorage

function luuLocalStorage(key, value) {
  localStorage.setItem(key, value);
  // setCookie('mangSinhVien', JSON.stringify(mangSinhVien),20);
}

function layLocalStorage(key) {
  //Kiểm tra xem localstorage có key đó k
  if (localStorage.getItem(key)) {
    return localStorage.getItem(key);
  }
  return undefined;
}

//định nghĩa sự kiện khi trang load xong html
window.onload = function () {
  if (layLocalStorage('mangSinhVien')) {
    //Biến đổi value thành mảng lại
    mangSinhVien = JSON.parse(layLocalStorage('mangSinhVien'));
    //Gọi hàm để từ mảng tạo ra table
    renderTableSinhVien(mangSinhVien);
    console.log(mangNhanVien);
  }
};

// ================ Mở rộng thuộc tính của Prototype ================
// SinhVien.prototype.tenThuocTinhMoRong = 'abc';
// SinhVien.prototype.tenThuocTinhMoRongFunc = function () {
//     console.log('abc');
// };

// var sv = new SinhVien();
// console.log(sv.tenThuocTinhMoRong);
// sv.tenThuocTinhMoRongFunc();

function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}
function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

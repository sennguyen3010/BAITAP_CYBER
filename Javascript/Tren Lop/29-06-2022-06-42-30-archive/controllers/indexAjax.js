//---------------phương thức get-------------
function getSinhVienApi() {
  //kết nối với api (đường dẫn backend cung cấp)
  var promise = axios({
    url: 'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien',
    method: 'GET',
  });
  //xử lý thành công
  promise.then(function (result) {
    console.log('result', result.data);
    //gọi hàm tạo table
    renderSinhVien(result.data);
  });

  //xử lý thất bại
  promise.catch(function (err) {
    console.log('result', err.data);
  });
}

//gọi hàm khi page vừa load
window.onload = function () {
  getSinhVienApi();
};

/**
 * Hàm này sẽ nhận vào 1 array (sinhVien) và trả ra output là string <tr>....</tr>
 * @param {*} arrSinhVien arrSinhVien là mảng các object sinhVien [sinhVien1,sinhVien2,...]
 * @returns trả ra 1 giá trị là 1 htmlString '<tr>...</tr> <tr>...</tr>'
 */
function renderSinhVien(arrSinhVien) {
  //param : input :arrSinhVien
  var html = ''; //output: string html
  for (var i = 0; i < arrSinhVien.length; i++) {
    var sv = arrSinhVien[i]; //Mỗi lần duyệt lấy ra 1 object sinhVien từ mảng {maSinhVien:'1',tenSinhVien:'...',...}
    html += `
            <tr>
                <td>${sv.maSinhVien}</td>
                <td>${sv.tenSinhVien}</td>
                <td>${sv.email}</td>
                <td>${sv.soDienThoai}</td>
                <td>${sv.loaiSinhVien}</td>
                <td>
                    <button class="btn btn-primary mr-2" onclick="chinhSua('${sv.maSinhVien}')">Sửa</button>
                    <button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSinhVien}')">Xoá</button>
                </td>
            </tr>
        `;
  }
  document.querySelector('tbody').innerHTML = html;
}

// --------------- POST: thêm sinh viên ----------------
document.querySelector('#btnXacNhan').onclick = function () {
  // {
  //     "maSinhVien": 0,
  //     "tenSinhVien": "string",
  //     "loaiSinhVien": "string",
  //     "diemToan": 0,
  //     "diemLy": 0,
  //     "diemHoa": 0,
  //     "diemRenLuyen": 0,
  //     "email": "string",
  //     "soDienThoai": "string"
  //   }
  // lấy thông tin khách hàng đúng format backend qui định
  var sv = new SinhVien();
  sv.maSinhVien = document.querySelector('#maSinhVien').value;
  sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
  sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
  sv.diemToan = document.querySelector('#diemToan').value;
  sv.diemLy = document.querySelector('#diemLy').value;
  sv.diemHoa = document.querySelector('#diemHoa').value;
  sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
  sv.email = document.querySelector('#email').value;
  sv.soDienThoai = document.querySelector('#soDienThoai').value;
  console.log('sv', sv);

  //gọi api
  var promise = axios({
    url: 'http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien',
    method: 'POST',
    data: sv, //format backend yêu cầu
  });
  //xử lý thành công
  promise.then(function (result) {
    console.log('result', result.data);
    //gọi lại api load lại table
    getSinhVienApi();
  });

  //xử lý thất bại
  promise.catch(function (error) {
    console.log('error', error.response.data);
  });
};

//-----------------DEL: xoá sinh viên
function xoaSinhVien(maSVClick) {
  console.log(maSVClick);

  var promise = axios({
    url:
      'http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=' +
      maSVClick,
    method: 'DELETE',
  });
  //xử lý thành công
  promise.then(function (result) {
    console.log('result', result.data);
    //gọi lại api load lại table
    getSinhVienApi();
  });

  //xử lý thất bại
  promise.catch(function (error) {
    console.log('error', error);
  });
}

function chinhSua(maSVClick) {
  console.log(maSVClick);

  var promise = axios({
    url:
      'http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=' +
      maSVClick,
    method: 'GET',
  });
  //xử lý thành công
  promise.then(function (result) {
    console.log('result', result.data);
    //gọi lại api load lại table
    // getSinhVienApi();
    var ttsv = result.data;
    // load thông tin sv lên giao diện
    document.querySelector('#maSinhVien').value = ttsv.maSinhVien;
    document.querySelector('#tenSinhVien').value = ttsv.tenSinhVien;
    document.querySelector('#loaiSinhVien').value = ttsv.loaiSinhVien;
    document.querySelector('#diemToan').value = ttsv.diemToan;
    document.querySelector('#diemLy').value = ttsv.diemLy;
    document.querySelector('#diemHoa').value = ttsv.diemHoa;
    document.querySelector('#diemRenLuyen').value = ttsv.diemRenLuyen;
    document.querySelector('#email').value = ttsv.email;
    document.querySelector('#soDienThoai').value = ttsv.soDienThoai;
  });

  //xử lý thất bại
  promise.catch(function (error) {
    // console.log('error', error);
  });
}

//---------------PUT: cập nhật dl
document.querySelector('#btnCapNhat').onclick = function () {
  // lấy dữ liệu từ người dùng nhập ở giao diện => gửi về api
  var sv = new SinhVien();
  sv.maSinhVien = document.querySelector('#maSinhVien').value;
  sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
  sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
  sv.diemToan = document.querySelector('#diemToan').value;
  sv.diemLy = document.querySelector('#diemLy').value;
  sv.diemHoa = document.querySelector('#diemHoa').value;
  sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
  sv.email = document.querySelector('#email').value;
  sv.soDienThoai = document.querySelector('#soDienThoai').value;

  var promise = axios({
    url:
      'http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=' +
      sv.maSinhVien,
    method: 'PUT',
    data: sv,
  });
  //xử lý thành công
  promise.then(function (result) {
    console.log('result', result.data);
    //gọi lại api load lại table
    getSinhVienApi();
  });

  //xử lý thất bại
  promise.catch(function (error) {
    console.log('error', error);
  });
};

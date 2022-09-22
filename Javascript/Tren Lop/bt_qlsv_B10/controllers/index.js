// MVC: mô hình quản lý project
// M: Models chứa cscs file class (prototype) - lớp đối tượng, mối class đối tượng là 1 file
// V: View là nơi chứa các file html (giao diện html)
// C: Controllers là nơi chứa các file xử lý giao diện cùng tên

// Bài tập quản lý sinh viên
var mangSinhVien = []; // [sv1, sv2, sv3]

document.querySelector('#btnThemSinhVien').onclick = function () {
  //input: thông tin sinh viên: SinhVien
  var sv = new SinhVien();
  //Lấy thông tin từ giao diện đưa vào input sv
  //sv['maSinhVien'] = document.querySelector('#maSinhVien').value;
  sv.maSinhVien = document.querySelector('#maSinhVien').value;
  sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
  sv.email = document.querySelector('#email').value;
  sv.matKhau = document.querySelector('#matKhau').value;
  sv.khoaHoc = document.querySelector('#khoaHoc').value;

  var ngaySinh = new Date(document.querySelector('#ngaySinh').value);
  sv.ngaySinh = ngaySinh.toLocaleDateString();
  sv.diemToan = document.querySelector('#diemToan').value;
  sv.diemLy = document.querySelector('#diemLy').value;
  sv.diemHoa = document.querySelector('#diemHoa').value;

  //console.log(sv);
  /*--------cách 1: Tạo html = createElement--------- */
  {
    //     // Bước 1: Tạo ra thẻ tr
    //     var trSinhVien = document.createElement('tr');
    //     //Tạo ra td mã sinh viên
    //     var tdMaSinhVien = document.createElement('td');
    //     tdMaSinhVien.innerHTML = sv.maSinhVien;
    //     var tdTenSinhVien = document.createElement('td');
    //     tdTenSinhVien.innerHTML = sv.tenSinhVien;
    //     var tdEmail = document.createElement('td');
    //     tdEmail.innerHTML = sv.email;
    //     var tdNgaySinh = document.createElement('td');
    //     tdNgaySinh.innerHTML = sv.ngaySinh;
    //     var tdKhoaHoc = document.createElement('td');
    //     tdKhoaHoc.innerHTML = sv.khoaHoc;
    //     var tdTinhDiemTrungBinh = document.createElement('td');
    //     tdTinhDiemTrungBinh.innerHTML = sv.tinhDiemTrungBinh();
    //     //td chức năng
    //     var btnXoa = document.createElement('button');
    //     btnXoa.innerHTML = 'Xoá';
    //     btnXoa.className = 'btn btn-danger';
    //     btnXoa.onclick = function () {
    //       //Từ thẻ con DOM ra thẻ cha
    //       //var trParent = btnXoa.parentElement.parentElement;
    //       //closest: DOM đến selector gần nhất chứa nó
    //       var trParent = btnXoa.closest('tr');
    //       //trParent.remove();
    //       trParent.remove();
    //     };
    //     var tdChucNang = document.createElement('td');
    //     tdChucNang.appendChild(btnXoa);
    //     //Thêm nội dung td vào tr
    //     trSinhVien.appendChild(tdMaSinhVien);
    //     trSinhVien.appendChild(tdTenSinhVien);
    //     trSinhVien.appendChild(tdEmail);
    //     trSinhVien.appendChild(tdNgaySinh);
    //     trSinhVien.appendChild(tdKhoaHoc);
    //     trSinhVien.appendChild(tdTinhDiemTrungBinh);
    //     trSinhVien.appendChild(tdChucNang);
    //     //Thêm nội dung tr vào giao diện
    //     var tBody = document.querySelector('#tblSinhVien');
    //     tBody.appendChild(trSinhVien);
    //     //cách 2: chuỗi innerHTML
    //     console.log(sv);
  }
  //output: html: string <tr></tr>
  /*--------cách 2: chuỗi html--------- */

  mangSinhVien.push(sv);

  console.log('mang sinh vien: ', mangSinhVien);

  // sau khi thêm 1 sinh viên => mảng có sinh viên [{}{}{}]
  renderTableSinhVien(mangSinhVien);
  var sMangSinhVien = JSON.stringify(mangSinhVien);

  luuLocalStorage('mangSinhVien', sMangSinhVien);
};
function renderTableSinhVien(arrSinhVien) {
  console.log(arrSinhVien);
  //input: arrSinhVien: [{}{}{}]
  //output: html = '<tr><td></td> ...</tr>'

  var htmlContent = '';
  //duyệt qua các object của mảng sinh viên
  for (var index = 0; index < arrSinhVien.length; index++) {
    var sv = arrSinhVien[index];
    //Từ object tạo ra thẻ tr
    var tr = `<tr>
    <th>${sv.maSinhVien}</th>
    <th>${sv.tenSinhVien}</th>
    <th>${sv.email}</th>
    <th>${sv.ngaySinh}</th>
    <th>${sv.khoaHoc}</th>
    <th>${sv.tinhDiemTrungBinh()}</th>
    <th>
    <button class="btn btn-danger" onclick="xoaSinhVien('${index}')">Xoá</button>
    <button class="btn btn-danger ml-2" onclick="xoaSinhVienTheoMa('${
      sv.maSinhVien
    }')">Xoá mã sinh viên</button>

    <button class="btn btn-primary">Sửa</button>
    </th>
  </tr>`;
    //Mỗi lần tạo xong thẻ tr sẽ + vào output
    htmlContent += tr;
  }
  document.querySelector('#tblSinhVien').innerHTML = htmlContent;
}
function xoaSinhVien(index) {
  //alert(maSVclick);
  mangSinhVien.splice(index, 1); //[{0}{2}]
  //sau khi xoá sinh viên xong thì tạo lại bảng
  renderTableSinhVien(mangSinhVien);
}

function xoaSinhVienTheoMa(maSV) {
  var viTriXoa = -1;
  for (var index = 0; index < mangSinhVien.length; index++) {
    //Mỗi lần duyệt lấy ra 1 sinh viên
    var sinhVien = mangSinhVien[index];
    if (sinhVien.maSinhVien == maSV) {
      // nếu obj sinh viên trong mảng == với lại mã sinh viên được click thì lấy ra vị trí
      viTriXoa = index;
      break;
    }
  }

  mangSinhVien.splice(viTriXoa, 1);
  // sau khi xoá tạo lại table mới
  renderTableSinhVien(mangSinhVien);
  //alert(maSV);
  // sau khi thêm sinh viên thành công => lưu mảng vào localstorage
}

//Lưu thông tin vào localstorage

function luuLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function layLocalStorage(key) {
  //kiểm tra cem localstorage có key đó k
  if (localStorage.getItem(key)) {
    return localStorage.getItem(key);
  }
  return undefined;
}

//định nghĩa sự kiện trang load xong html
window.onload = function () {
  var value = layLocalStorage('mangSinhVien');
  if (value != undefined) {
    //biến đổi value thành mảng lại
    mangSinhVien = JSON.parse(value);
    //gọi hàm để từ mảng tạo ra table
    renderTableSinhVien(mangSinhVien);
  }
};

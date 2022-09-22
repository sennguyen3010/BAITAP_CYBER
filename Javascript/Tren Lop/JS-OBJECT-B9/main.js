/* Tính chất hướng đối tượng:
 + tường minh về mặt ngữ nghĩa (đưa biến và hàm về đúng vị trí của nó) 
 + Tính đóng gói: biến của đối tượng nào thì phải thông qua đối tượng đó mới truy xuất được
 */

//khai báo biến đối tượng (object) {key: value}
// var hocVien = {
//   hoTen: 'Nguyen Van Teo',
//   soDienThoai: '09090909',
//   email: 'nguyenvanteo@gmail.com',
//   baiTap1: 5,
//   baiTap2: 10,
//   baiTap3: 0,
//   tinhDiemTrungBinh: function () {
//     //this: đại diện cho object chứa function đó
//     //output: dtb: number
//     var dtb = 0;
//     dtb = (this.baiTap1 + this.baiTap2 + this.baiTap3) / 3;
//     return dtb;
//   },
//   hienThiThongTin: function () {
//     console.log('Họ tên: ', this.hoTen);
//   },
// };

// var giangVien = {
//   hoTen: 'Nguyen Van Sang',
//   soDienThoai: '08080808',
//   hienThiThongTin: function () {
//     console.log('Họ tên: ', this.hoTen);
//     console.log('Số điện thoại: ', this.soDienThoai);
//   },
// };

// console.log(hocVien);

// //truy suất đến biến trong đối tượng (thuộc tính): object.key hoặc object['key']
// console.log('họ tên: ', hocVien.hoTen);
// console.log('sdt: ', hocVien['soDienThoai']);

// console.log('Giảng viên: ', giangVien.hoTen);
// console.log('Giảng viên: ', giangVien['soDienThoai']);

// //Truy xuất đến hàm trong đối tượng(phương thức): object.key() hoặc object['key']()
// giangVien.hienThiThongTin();

//bài tập quản lý sinh viên
/* yêu cầu xây dựng chức năng cho người dùng nhập thông tin và xuất ra thông tin */
window.onload = function () {
  //cửa sổ window bật lên thì hàm này sẽ kích hoạt (được gọi)
  //B1: khai báo đối tượng chứa thông tin từ giao diện
  var sinhVien = {
    maSinhVien: '',
    tenSinhVien: '',
    loaiSinhVien: '',
    diemToan: 0,
    diemVan: 0,
    tinhDiemTrungBinh: function () {
      var output = 0;
      output = (Number(this.diemToan) + Number(this.diemVan)) / 2;
      return output;
    },
    xepLoai: function () {
      //input: điểm trung bình: number (điểm >=5 đậu, <5 rớt)
      var diemTB = this.tinhDiemTrungBinh();
      //output: loaiSinhVien = ''
      var loaiSinhVien = '';
      if (diemTB >= 5) {
        loaiSinhVien = 'Đậu';
      } else {
        loaiSinhVien = 'Rớt';
      }

      return loaiSinhVien;
    },
  };

  console.log(sinhVien);

  document.querySelector('#btnXuatThongTin').onclick = function () {
    //xác định input: thông tin hocVien = {}
    sinhVien.maSinhVien = document.querySelector('#maSinhVien').value;
    sinhVien.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sinhVien.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sinhVien.diemToan = document.querySelector('#diemToan').value;
    sinhVien.diemVan = document.querySelector('#diemVan').value;

    //kiểm tra
    console.log(sinhVien);
    //output
    document.querySelector('#txtTenSinhVien').innerHTML = sinhVien.tenSinhVien;
    document.querySelector('#txtMaSinhVien').innerHTML = sinhVien.maSinhVien;
    document.querySelector('#txtLoaiSinhVien').innerHTML =
      sinhVien.loaiSinhVien;

    var DiemTrungBinh = sinhVien.tinhDiemTrungBinh();
    document.querySelector('#txtDiemTrungBinh').innerHTML = DiemTrungBinh;

    var xepLoai = sinhVien.xepLoai();
    document.querySelector('#txtXepLoai').innerHTML = xepLoai;
  };
};

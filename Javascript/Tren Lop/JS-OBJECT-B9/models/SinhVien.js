//Khai báo prototype sinh viên, kiểu dữ liệu object SinhVien (lớp đối tượng)
function SinhVien() {
  //this. đại diện cho function
  this.maSinhVien = '';
  this.tenSinhVien = '';
  this.loaiSinhVien = '';
  this.diemToan = '';
  this.diemVan = '';
  this.tinhDiemTrungBinh = function () {
    var output = 0;
    output = (Number(this.diemToan) + Number(this.diemVan)) / 2;
    return output;
  };
  this.xepLoai = function () {
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
  };
}

//khai báo đối tượng từ prototype dùng từ khoá new
var sinhVien1 = new SinhVien(); //instance - object - đối tượng: thể hiện từ prototype
sinhVien1.tenSinhVien = 'A';
sinhVien1.diemToan = 5;
sinhVien1.diemVan = 10;
console.log('sv1: ', sinhVien1.tinhDiemTrungBinh());
console.log(sinhVien1);

var sinhVien2 = new SinhVien();
console.log(sinhVien2);

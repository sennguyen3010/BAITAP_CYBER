function NhanVien() {
  this.taiKhoan = '';
  this.hoTen = '';
  this.email = '';
  this.matKhau = '';
  this.ngayLam = '';
  this.luongCoBan = 0;
  this.chucVu = '';
  this.gioLam = 0;
  this.tinhTongLuong = function () {
    var tongLuong = 0;
    if (this.chucVu == 'giamDoc') {
      tongLuong = Number(this.luongCoBan) * 3;
      return tongLuong;
    } else if (this.chucVu == 'truongPhong') {
      tongLuong = Number(this.luongCoBan) * 2;
      return tongLuong;
    } else if (this.chucVu == 'nhanVien') {
      tongLuong = Number(this.luongCoBan);
      return tongLuong;
    }
  };
  this.xepLoai = function () {
    var soGioLam = Number(this.gioLam);
    var xepLoai = '';
    if (soGioLam >= 192) {
      return (xepLoai = 'Nhân viên xuất sắc');
    } else if (soGioLam >= 176) {
      return (xepLoai = 'Nhân viên giỏi');
    } else if (soGioLam >= 160) {
      return (xepLoai = 'Nhân viên khá');
    } else if (soGioLam < 160) {
      return (xepLoai = 'Nhân viên trung bình');
    }
  };
}

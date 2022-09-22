//lưu ý: sẽ k được thực hiện thao tác dom trên file class. or nếu thực hiện
// thì selector phải chuyển thành tham số

export class Menu {
  danhSachMonAn = []; //[{mamon: 1,tenmon:'com'},{mamon: 1,tenmon:'com'}]

  themMonAn = function (monAnMoi) {
    this.danhSachMonAn.push(monAnMoi);
  };

  layMonAn = function () {
    //ktra storage có mảng đó hay k => có mới lấy ra
    if (localStorage.getItem('mangMonAn')) {
      let sMangMonAn = localStorage.getItem('mangMonAn');
      this.danhSachMonAn = JSON.parse(sMangMonAn);
    }
  };

  luuMonAn = function () {
    //biến đổi mảng món ăn thành chuỗi
    this.danhSachMonAn = JSON.stringify(mangMonAn);
    localStorage.setItem('mangMonAn', sMangMonAn);
  };

  xoaMonAn = function (maMonAn) {
    let index = this.danhSachMonAn.findIndex((mon) => mon.maMon === maMonAn);

    this.danhSachMonAn.splice(index, 1);
  };

  layThongTinMonAn = function (maMon) {
    //lấy ra object món ăn ra từ mã món
    let monAnLayRa = this.danhSachMonAn.find((mon) => mon.maMon === maMon);
    return monAnLayRa;
  };

  capNhatMonAn = function (maMon, monAnCapNhat) {
    let monAnTrongMang = this.layThongTinMonAn(maMon);

    for (let key in monAnTrongMang) {
      monAnTrongMang[key] = monAnCapNhat[key];
    }
  };
}

var taiKhoan = document.querySelector('#tknv');
var hoTen = document.querySelector('#name');
var email = document.querySelector('#email');
var matKhau = document.querySelector('#password');
var ngayLam = document.querySelector('#datepicker');
var luongCB = document.querySelector('#luongCB');
var chucVu = document.querySelector('#chucvu');
var gioLam = document.querySelector('#gioLam');
var form = document.querySelector('form');

function isFormValid() {
  var inputContainers = form.querySelectorAll('.sp-thongbao');
  var result = true;
  inputContainers.forEach((container) => {
    if (container.classList.contains('error')) {
      result = false;
    }
  });
  return result;
}

function validateForm() {
  // console.log(checkDuplicate(taiKhoan));
  // Acount
  if (taiKhoan.value.trim() === '') {
    setError(taiKhoan, 'không được để trống');
  } else if (
    taiKhoan.value.trim().length < 4 ||
    taiKhoan.value.trim().length > 6
  ) {
    setError(taiKhoan, 'Phải nhập từ 4 đến 6 ký số ');
  }
  //  else if (checkDuplicate(taiKhoan)) {
  //   setError(taiKhoan, 'Tài khoản này đã tồn tại');
  // }
  else {
    setSuccess(taiKhoan);
  }
  //UserName
  if (hoTen.value.trim() === '') {
    setError(hoTen, 'không được để trống');
  } else if (!checkLetter(hoTen.value)) {
    setError(hoTen, 'Tên nhân viên phải là chữ');
  } else {
    setSuccess(hoTen);
  }

  //Email
  if (email.value.trim() === '') {
    setError(email, 'không được để trống');
  } else if (checkEmail(email.value)) {
    setSuccess(email);
  } else {
    setError(email, 'Vui lòng nhập email hợp lệ');
  }
  //Password
  if (matKhau.value.trim() === '') {
    setError(matKhau, 'không được để trống');
  } else if (
    matKhau.value.trim().length < 6 ||
    matKhau.value.trim().length > 10
  ) {
    setError(matKhau, 'Mật Khẩu từ 6-10 ký tự');
  } else if (!checkPassword(matKhau.value)) {
    setError(
      matKhau,
      'Phải chứa ít nhất 1 số, 1 ký tự in hoa và thường , 1 ký tự đặc biệt'
    );
  } else {
    setSuccess(matKhau);
  }
  //Date

  // var date = new Date(document.querySelector('#datepicker').value);
  // var ngayLamTest = moment(date).format('YYYY-MM-DD');

  // console.log(ngayLamTest);
  if (ngayLam.value == '') {
    setError(ngayLam, 'không được để trống');
  } else if (moment(ngayLam.value, 'MM/DD/YYYY', true).isValid()) {
    setSuccess(ngayLam);
  } else {
    setError(ngayLam, 'phải có định dạng dd-mm-yyyy');
  }
  //Salary
  if (luongCB.value.trim() === '') {
    setError(luongCB, 'không được để trống');
  } else if (
    Number(luongCB.value.trim()) < 1000000 ||
    Number(luongCB.value.trim()) > 20000000
  ) {
    setError(luongCB, 'Lương cơ bản từ 1,000,000 - 20,000,000');
  } else {
    setSuccess(luongCB);
  }
  //Position
  if (chucVu.value.trim() === 'Chọn chức vụ') {
    setError(chucVu, 'Vui lòng chọn chức vụ');
  } else {
    setSuccess(chucVu);
  }
  //Hour
  if (gioLam.value.trim() === '') {
    setError(gioLam, 'không được để trống');
  } else if (
    Number(gioLam.value.trim()) < 80 ||
    Number(gioLam.value.trim()) > 200
  ) {
    setError(gioLam, 'Số giờ làm từ 80 - 200 giờ');
  } else {
    setSuccess(gioLam);
  }
}

function setError(element, message) {
  let parent = element.parentElement;
  let span = parent.querySelector('.sp-thongbao');

  span.classList.add('error');
  span.innerText = message;
}

function setSuccess(element) {
  let parent = element.parentElement;
  let span = parent.querySelector('.sp-thongbao');

  span.classList.remove('error');
  span.innerText = '';
}

function checkLetter(input) {
  var regex =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/i;
  return regex.test(input);
}

function checkEmail(input) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regexEmail.test(input);
}

function checkPassword(input) {
  var reg =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return reg.test(input);
}

// function checkDuplicate(input) {
//   var result = false;
//   mangNhanVien.forEach((item) => {
//     if (item.taiKhoan == input.value) {
//       result = true;
//     }
//   });
//   return result;
// }
// function checkDate(input) {
//   var regex = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
//   return regex.test(input);
// }

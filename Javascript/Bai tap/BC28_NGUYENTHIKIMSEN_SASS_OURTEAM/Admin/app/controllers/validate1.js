let taiKhoan = document.querySelector('#TaiKhoan');
let hoTen = document.querySelector('#HoTen');
let matKhau = document.querySelector('#MatKhau');
let email = document.querySelector('#Email');
let hinhAnh = document.querySelector('#HinhAnh');
let loaiNguoiDung = document.querySelector('#loaiNguoiDung');
let loaiNgonNgu = document.querySelector('#loaiNgonNgu');
let moTa = document.querySelector('#MoTa');
let form = document.querySelector('form');

document.querySelector('#btnThemNguoiDung').onclick = function () {
  document.querySelector('#TaiKhoan').value = '';
  document.querySelector('#HoTen').value = '';
  document.querySelector('#MatKhau').value = '';
  document.querySelector('#Email').value = '';
  document.querySelector('#HinhAnh').value = '';
  document.querySelector('#loaiNguoiDung').value = 'Chọn loại người dùng';
  document.querySelector('#loaiNgonNgu').value = 'Chọn ngôn ngữ';
  document.querySelector('#MoTa').value = '';
  // console.log(nd);

  setSuccess(taiKhoan);
  setSuccess(hoTen);
  setSuccess(matKhau);
  setSuccess(email);
  setSuccess(hinhAnh);
  setSuccess(loaiNguoiDung);
  setSuccess(loaiNgonNgu);
  setSuccess(moTa);
  document.querySelector('#TaiKhoan').removeAttribute('disabled');
};

function isFormValid() {
  let inputContainers = form.querySelectorAll('.thongbao');
  let result = true;
  inputContainers.forEach((container) => {
    if (container.classList.contains('error')) {
      return (result = false);
    }
  });
  return result;
}

function validateForm(arr) {
  //Acount
  if (taiKhoan.value.trim() === '') {
    setError(taiKhoan, 'Không được để trống');
  } else if (checkDuplicate(taiKhoan, arr)) {
    setError(taiKhoan, 'Không được trùng');

    // FetchApi('https://62cfc7d71cc14f8c087d30b1.mockapi.io/Products').then(
    //   (result) => {
    //     const data = result.data;
    // }
    // );
    // console.log(nd);
  } else {
    setSuccess(taiKhoan);
  }

  //UserName
  if (hoTen.value.trim() === '') {
    setError(hoTen, 'không được để trống');
  } else if (!checkName(hoTen)) {
    setError(hoTen, 'Không được chứ số hoặc ký tự đặc biệt');
  } else {
    setSuccess(hoTen);
  }

  //Password
  if (matKhau.value.trim() === '') {
    setError(matKhau, 'Không được để trống');
  } else if (!checkPassword(matKhau)) {
    setError(
      matKhau,
      'Mật khẩu phải có ít nhất 1 ký tự hoa, 1 ký tự thường, 1 ký tự đặc biệt, 1 ký tự số (độ dài 6-8)'
    );
  } else {
    setSuccess(matKhau);
  }

  //Email
  if (email.value.trim() === '') {
    setError(email, 'Không được để trống');
  } else if (!checkEmail(email)) {
    setError(email, 'Vui lòng nhập email hợp lệ');
  } else {
    setSuccess(email);
  }

  //Avatar
  if (hinhAnh.value.trim() === '') {
    setError(hinhAnh, 'Không được để trống');
  } else {
    setSuccess(hinhAnh);
  }

  // userType
  if (loaiNguoiDung.value === 'Chọn loại người dùng') {
    setError(loaiNguoiDung, 'Không được để trống');
  } else {
    setSuccess(loaiNguoiDung);
  }

  //language
  if (loaiNgonNgu.value === 'Chọn ngôn ngữ') {
    setError(loaiNgonNgu, 'Không được để trống');
  } else {
    setSuccess(loaiNgonNgu);
  }

  //Des
  if (moTa.value.trim() === '') {
    setError(moTa, 'Không được để trống');
  } else if (!checkLength(moTa)) {
    setError(moTa, 'không được vượt quá 60 ký tự');
  } else {
    setSuccess(moTa);
  }
}

function setError(element, message) {
  let parent = element.parentElement;
  let span = parent.querySelector('.thongbao');

  span.classList.add('error');
  span.innerHTML = message;
}

function setSuccess(element) {
  let parent = element.parentElement;
  let span = parent.querySelector('.thongbao');
  span.classList.remove('error');
  span.innerHTML = '';
}

function checkDuplicate(input, arr) {
  let newValue = input.value;

  let flag = false;
  for (let item of arr) {
    if (newValue == item.taiKhoan) {
      flag = true;
    }
  }
  return flag;
}

function checkName(input) {
  let regSpecial = /[!@#$%^&*(),.?":{}|<>]/g;
  let regexName =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/i;

  let testName = regexName.test(input.value);
  let testSpecial = regSpecial.test(input.value);

  if (!testName || testSpecial) {
    return false;
  } else {
    return true;
  }
}

function checkPassword(input) {
  let reg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,8}$/;

  let value = input.value.trim();
  let testPassword = reg.test(value);
  if (!testPassword) {
    return false;
  } else {
    return true;
  }
}

function checkEmail(input) {
  let regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let testEmail = regexEmail.test(input.value);
  if (!testEmail) {
    return false;
  } else {
    return true;
  }
}

function checkLength(input) {
  let inputLength = input.value.trim().length;
  if (inputLength > 60) {
    return false;
  } else {
    return true;
  }
}

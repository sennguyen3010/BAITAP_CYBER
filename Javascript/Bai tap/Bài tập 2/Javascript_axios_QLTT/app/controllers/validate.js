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

  setSuccess()
};

function setError(element, message) {
  let parent = element.parentElement;
  //   console.log(parent);
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

function checkEmpty(listInput) {
  listInput.forEach((input) => {
    if (
      input.value.trim() === '' ||
      input.value === 'Chọn loại người dùng' ||
      input.value === 'Chọn ngôn ngữ'
    ) {
      setError(input, 'không được để trống');
    } else {
      setSuccess(input);
    }
  });
}

function checkPassword(input) {
  let reg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,8}$/;

  // return reg.test(input)
  let value = input.value.trim();
  let testPassword = reg.test(value);
  if (!testPassword) {
    setError(
      input,
      'mật khẩu phải có ít nhất 1 ký tự hoa, 1 ký tự thường, 1 ký tự đặc biệt, 1 ký tự số (độ dài 6-8)'
    );
  } else {
    setSuccess(input);
  }
}

function checkEmail(input) {
  let regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let testEmail = regexEmail.test(input.value);
  if (!testEmail) {
    setError(input, 'Vui lòng nhập email hợp lệ');
  } else {
    setSuccess(input);
  }
}

function checkName(input) {
  let regSpecial = /[!@#$%^&*(),.?":{}|<>]/g;
  let regexName =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/i;

  let testName = regexName.test(input.value);
  let testSpecial = regSpecial.test(input.value);

  // console.log(testName, !testSpecial);

  if (testName && !testSpecial) {
    setError(input, 'Không được chứ số hoặc ký tự đặc biệt');
  } else {
    setSuccess(input);
  }
}

document.querySelector('#btnThem').onclick = function (event) {
  event.preventDefault();

  checkEmpty([
    taiKhoan,
    hoTen,
    matKhau,
    email,
    hinhAnh,
    loaiNguoiDung,
    loaiNgonNgu,
    moTa,
  ]);

  checkPassword(matKhau);
  checkEmail(email);
  checkName(hoTen);
};

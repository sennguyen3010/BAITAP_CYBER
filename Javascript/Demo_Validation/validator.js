// var taiKhoan = document.querySelector('#tknv');
// var hoTen = document.querySelector('#name');
// var email = document.querySelector('#email');
// var matKhau = document.querySelector('#password');
// var ngayLam = document.querySelector('#datepicker');
// var luongCB = document.querySelector('#luongCB');
// var chucVu = document.querySelector('#chucvu');
// var gioLam = document.querySelector('#gioLam');
// var form = document.querySelector('form');

// function showError(input, message) {
//   let parent = input.parentElement;
//   // console.log(parent);
//   let span = parent.querySelector('.sp-thongbao');

//   //   span.classList.add('error');
//   span.innerText = message;
// }

// function showSuccess(input) {
//   let parent = input.parentElement;
//   let span = parent.querySelector('.sp-thongbao');

//   span.innerText = '';
// }

// function checkEmptyError(listInput) {
//   //   let isEmptyError = false;
//   listInput.forEach((input) => {
//     input.value = input.value.trim();
//     if (!input.value || input.value == 'Chọn chức vụ') {
//       showError(input, 'không được để trống');
//       return false;
//     }
//     showSuccess(input);
//     return true;
//   });
//   //   return isEmptyError;
// }

// function checkNumber(input) {
//   var regexNumber = /^[0-9]+$/;
//   return regexNumber.test(Number(input.value.trim()));
// }

// function checkAcount(input) {
//   if (input.value.trim() === '') {
//     showError(input, 'không được để trống');
//     return false;
//   } else if (!checkNumber(input)) {
//     showError(input, 'Tất cả phải là số');
//     return false;
//   } else {
//     checkLength(input, 4, 6, ' ký số');
//   }
// }

// function checkEmail(input) {
//   if (input.value.trim() === '') {
//     showError(input, 'không được để trống');
//     return false;
//   } else if (!isEmail(input)) {
//     showError(input, 'Email invalid');
//     return false;
//   } else {
//     showSuccess(input);
//     return true;
//   }
// }
// function isEmail(input) {
//   const regexEmail =
//     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   input.value = input.value.trim();
//   return regexEmail.test(input.value);
//   // if (regexEmail.test(input.value)) {
//   //   showSuccess(input);
//   //   return true;
//   // } else {
//   //   showError(input, 'Email invalid');
//   //   return false;
//   // }
// }

// function checkLength(input, min, max, message) {
//   input.value = input.value.trim();
//   // console.log(input.value.length);
//   if (input.value.length < min || input.value.length > max) {
//     //   console.log('tyy');
//     showError(input, 'Phải có từ ' + min + ' đến ' + max + message);
//     return false;
//   }
//   showSuccess(input);
//   return true;
// }

// document.querySelector('#btnThemNV').onclick = function () {};

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   var valid = true;

//   valid &=
//     // checkLength(taiKhoan, 4, 6) &
//     checkLength(matKhau, 6, 10) &
//     checkEmptyError([hoTen, matKhau, ngayLam, luongCB, chucVu, gioLam]) &
//     checkEmail(email) &
//     checkAcount(taiKhoan);

//   if (!valid) {
//     return;
//   }
// });

// Đối tượng
function Validator(options) {
  var selectorRules = {};

  // hàm thực hiện validate
  function validate(inputElement, rule) {
    var errorElement = inputElement.parentElement.querySelector(
      options.errorSelector
    );
    var errorMessage;

    // lấy ra các rules của selector
    var rules = selectorRules[rule.selector];

    // lặp qua từng rule và ktra
    // nếu có lỗi thì dừng việc ktra
    for (var i = 0; i < rules.length; i++) {
      // switch (inputElement.type){
      //   case
      // }
      errorMessage = rules[i](inputElement.value);
      if (errorMessage) break;
    }
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add('text-danger');
    } else {
      errorElement.innerText = '';
      inputElement.parentElement.classList.remove('text-danger');
    }

    return !errorMessage;
  }

  //lấy element của form cần validate
  var formElement = document.querySelector(options.form);
  if (formElement) {
    // khi submit form
    formElement.onsubmit = function (e) {
      e.preventDefault();

      var isFormValid = true;

      // lặp qua từng rules và validate
      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = validate(inputElement, rule);
        if (!isValid) {
          isFormValid = false;
        }
      });

      // if (isFormValid) {
      //   // trường hợp submit với JS
      //   if (typeof options.onSubmit === 'function') {
      //     var enableInputs = formElement.querySelectorAll(
      //       '[name]:not([disabled])'
      //     );
      //     var formValues = Array.from(enableInputs).reduce(function (
      //       values,
      //       input
      //     ) {
      //       values[input.name] = input.value;
      //       return values;
      //     },
      //     {});
      //     options.onSubmit({
      //       formValues,
      //     });
      //   }
      // }
      // // trường jợp submit với hành vi mặc định
      // else {
      //   formElement.submit();
      // }
    };
  }
  if (formElement) {
    //lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
    options.rules.forEach(function (rule) {
      // lưu lại các rules cho mỗi input

      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }
      var inputElement = formElement.querySelector(rule.selector);

      if (inputElement) {
        // xử lý trường hợp blur khỏi input
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };

        // xử lý mỗi khi người dùng nhập vào input
        inputElement.oninput = function () {
          var errorElement =
            inputElement.parentElement.querySelector('.sp-thongbao');

          errorElement.innerText = '';
          inputElement.parentElement.classList.remove('text-danger');
        };
      }
    });
    // console.log(selectorRules);
  }
}

// Định nghĩa rules
// nguyên tắc của các rules:
// 1. khi có lỗi => trả ra message lỗi
// 2. khi hợp lệ => k trả ra gì (undefined)
Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : message || 'vui lòng nhập trường này';
    },
  };
};

Validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      var regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return regex.test(value)
        ? undefined
        : message || 'trường này phải là email';
    },
  };
};

Validator.minLength = function (selector, min, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : message || `vui lòng nhập tối thiểu ${min} ký tự`;
    },
  };
};

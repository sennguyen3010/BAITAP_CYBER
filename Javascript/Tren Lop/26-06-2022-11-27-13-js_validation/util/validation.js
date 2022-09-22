// Date:
// 	+ yyyy/mm/dd or yyyy-mm-dd
// 	/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/

// Letter:
// 	"^[A-Za-z]+$"

// 	"^[a-zA-Z_Ă€ĂĂ‚ĂƒĂˆĂ‰Ăáº¾ĂŒĂĂ’Ă“Ă”Ă•Ă™ĂÄ‚ÄÄ¨Å¨Æ Ă Ă¡Ă¢Ă£Ă¨Ă©ĂªĂ¬Ă­Ă²Ă³Ă´ĂµĂ¹ĂºÄƒÄ‘Ä©Å©Æ¡Æ¯Ä‚áº áº¢áº¤áº¦áº¨áºªáº¬áº®áº°áº²áº´áº¶" + "áº¸áººáº¼á»€á»€á»‚Æ°Äƒáº¡áº£áº¥áº§áº©áº«áº­áº¯áº±áº³áºµáº·áº¹áº»áº½á»á»á»ƒáº¿á»„á»†á»ˆá»á»Œá»á»á»’á»”á»–á»˜á»á»œá»á» á»¢á»¤á»¦á»¨á»ªá»…á»‡á»‰á»‹á»á»á»‘á»“á»•á»—á»™á»›á»á»Ÿá»¡á»£" + "á»¥á»§á»©á»«á»¬á»®á»°á»²á»´Ăá»¶á»¸á»­á»¯á»±á»³á»µá»·á»¹\\s]+$"

// Number:
// 	interger:
// 	/^[0-9]+$/

// Email:
// 	/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// Password:
// 	/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/

function kiemTraRong(value, selectorError, name) {
  if (value.trim() === '') {
    document.querySelector(selectorError).innerHTML =
      name + ' không được bỏ trống !';
    return false;
  }
  document.querySelector(selectorError).innerHTML = '';
  return true;
}

function kiemTraTatCaKyTu(value, selectorError, name) {
  var regexLetter = /^[A-Z a-z]+$/;
  if (regexLetter.test(value)) {
    document.querySelector(selectorError).innerHTML = '';
    return true;
  }
  document.querySelector(selectorError).innerHTML =
    name + ' tất cả phải là ký tự !';
  return false;
}

function kiemTraTatCaSo(value, selectorError, name) {
  var regexAllNumber = /^[0-9]+$/;
  if (regexAllNumber.test(value)) {
    document.querySelector(selectorError).innerHTML = '';
    return true;
  }
  document.querySelector(selectorError).innerHTML =
    name + ' tất cả phải là số !';
  return false;
}

function kiemTraEmail(value, selectorError, name) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (regexEmail.test(value)) {
    document.querySelector(selectorError).innerHTML = '';
    return true;
  }
  document.querySelector(selectorError).innerHTML =
    name + ' không đúng định dạng <br /> Ví dụ: email@gmail.com !';
  return false;
}

function kiemTraMatKhau(value, selectorError, name) {
  //Password phải có số và chữ, ít nhất 1 ký tự viết hoa, 1 ký tự đặc biệt
  var regexPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
  if (regexPassword.test(value)) {
    document.querySelector(selectorError).innerHTML = '';
    return true;
  }
  document.querySelector(selectorError).innerHTML =
    name + ' phải có số và chữ, ít nhất 1 ký tự viết hoa và 1 ký tự đặc biệt!';
  return false;
}

function kiemTraDoDai(value, selectorError, name, minLength, maxLength) {
  if (value.length > maxLength || value.length < minLength) {
    document.querySelector(selectorError).innerHTML =
      name + ' độ dài từ ' + minLength + ' đến ' + maxLength + ' ký tự';
    return false;
  }
  document.querySelector(selectorError).innerHTML = '';
  return true;
}
//Kiểm tra giá trị từ min - max
function kiemTraGiaTri(value, selectorError, name, minValue, maxValue) {
  if (Number(value) < minValue || Number(value) > maxValue) {
    document.querySelector(selectorError).innerHTML =
      name + ' giá trị từ ' + minValue + ' đến ' + maxValue;
    return false;
  }
  document.querySelector(selectorError).innerHTML = '';
  return true;
}

function kiemTraNgayThangNam(value, selectorError, name) {
  //yyyy-mm-dd
  var regex = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
  if (regex.test(value)) {
    document.querySelector(selectorError).innerHTML = '';
    return true;
  }
  document.querySelector(selectorError).innerHTML =
    name + ' phải có định dạng yyyy-mm-dd';
  return false;
}

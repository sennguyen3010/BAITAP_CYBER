console.log(axios);

// đọc file
window.onload = function () {
  //getFileText();
  //   getFileXML();
  getFileJson();
};

function getFileText() {
  //trang vừa load lên sẽ chạy luôn hàm này

  //gọi axios để đọc file
  //sau khi gọi axios kết quả trả về sẽ là object promise
  var promise = axios({
    url: './data/data.txt', // đường dẫn đến file or backend cung cấp
    method: 'GET', // method backend qui định
    responseType: 'Text', // kết quả trả về file
  });

  // hàm trả về kết quả khi request thành công
  promise.then(function (result) {
    console.log('kết quả', result.data);

    document.getElementById('hoTen').innerHTML = result.data;
  });

  //hàm trả về kết quả thất bại
  promise.catch(function (error) {
    console.log(error);
  });
}

function getFileXML() {
  var promise = axios({
    url: './data/data.xml',
    method: 'GET',
    responseType: 'document', // kiểu dữ liệu trả về document <the ..>...</the>
  });

  //xử lý thành công
  promise.then(function (result) {
    //function này sẽ tự động kích hoạt khi request thành công
    console.log('kết quả', result.data);
    var hoTen = result.data.querySelector('hoTen').innerHTML;
    //in ra giao diện
    document.getElementById('hoTen').innerHTML = hoTen;
  });

  // xử lý thất bại
  promise.catch(function (error) {
    console.log(error);
  });
}

function getFileJson() {
  var promise = axios({
    url: './data/data.json',
    method: 'GET',
    responseType: 'json',
  });
  // xử lý thành công
  promise.then(function (result) {
    console.log(result.data);
    document.getElementById('hoTen').innerHTML = result.data.hoTen;
  });

  // xử lý thất bại
  promise.catch(function (error) {
    console.log(error);
  });
}

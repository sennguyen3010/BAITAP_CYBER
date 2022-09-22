function getNguoiDungApi() {
  const promise = axios({
    url: 'https://62cfc7d71cc14f8c087d30b1.mockapi.io/Products',
    method: 'GET',
  });
  promise.then(function (result) {
    // console.log(result.data);
    renderGV(result.data);
  });

  promise.catch(function (error) {
    console.log('error', error.data);
  });
}

window.onload = function () {
  getNguoiDungApi();
};

function renderGV(arrNguoiDung) {
  let arrGV = [];
  let html = '';
  arrNguoiDung.filter((item, index) => {
    if (item.loaiND === 'GV') {
      arrGV.push(item);
    }
    // console.log('GV', arrGV);
  });

  arrGV.map((item, index) => {
    if (index < 8) {
      html += `
            <div class="col-12 col-sm-6 col-lg-3">
            <div class="teacher-item">
              <div class="teacher-item-img">
                <img src="./img/${item.hinhAnh}" alt="" />
              </div>
              <div class="teacher-item-content">
                <h1>${item.ngonNgu}</h1>
                <h2>${item.hoTen}</h2>
                <p>${item.moTa}</p>
              </div>
            </div>
          </div>
            `;
    }
  });

  document.querySelector('.teacher-render').innerHTML = html;
}

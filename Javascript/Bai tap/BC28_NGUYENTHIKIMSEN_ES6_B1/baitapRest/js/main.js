const tinhDiemTB = (...diemCacMon) => {
  let diemTB1 = 0;
  let diemTB2 = 0;

  switch (diemCacMon.length) {
    case 3:
      {
        diemTB1 = (diemCacMon[0] + diemCacMon[1] + diemCacMon[2]) / 3;
        document.querySelector('#tbKhoi1').innerHTML = diemTB1.toFixed(2);
      }
      break;
    case 4:
      {
        diemTB2 =
          (diemCacMon[0] + diemCacMon[1] + diemCacMon[2] + diemCacMon[3]) / 4;
        document.querySelector('#tbKhoi2').innerHTML = diemTB2.toFixed(2);
      }
      break;
  }
};

document.querySelector('#btnKhoi1').onclick = function () {
  let diemToan = Number(document.querySelector('#inpToan').value);
  let diemLy = Number(document.querySelector('#inpLy').value);
  let diemHoa = Number(document.querySelector('#inpHoa').value);

  tinhDiemTB(diemToan, diemLy, diemHoa);
};

document.querySelector('#btnKhoi2').onclick = function () {
  let diemVan = Number(document.querySelector('#inpVan').value);
  let diemSu = Number(document.querySelector('#inpSu').value);
  let diemDia = Number(document.querySelector('#inpDia').value);
  let diemTA = Number(document.querySelector('#inpEnglish').value);

  tinhDiemTB(diemVan, diemSu, diemDia, diemTA);
};

const colorList = [
  'pallet',
  'viridian',
  'pewter',
  'cerulean',
  'vermillion',
  'lavender',
  'celadon',
  'saffron',
  'fuschia',
  'cinnabar',
];

window.onload = function () {
  loadColors();
};
const loadColors = () => {
  let html = '';

  colorList.map((color, index) => {
    html += `
        <button class="color-button ${color} ${
      index == 0 ? 'active' : ''
    }" onclick="changeColor('${index}','${color}')"></button>
        
        `;
  });

  document.querySelector('#colorContainer').innerHTML = html;
};

function changeColor(index, color) {
  let btns = document.querySelectorAll('.color-button');
  let house = document.querySelector('#house');
  let colorContainer = document.querySelector('#colorContainer');

  colorContainer.querySelector('.active')?.classList.remove('active');
  house.className = 'house ' + color;
  Array.from(btns).map((btn, i) => {
    if (index == i) {
      btn.classList.add('active');
    }
  });
}

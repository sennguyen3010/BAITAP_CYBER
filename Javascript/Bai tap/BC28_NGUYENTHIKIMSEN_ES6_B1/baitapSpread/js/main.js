let str = 'Hover Me!';
let chars = [...str];

let html = '';
chars.map((item) => {
  html += `
    <span>${item}</span>
    `;
});
document.querySelector('.heading').innerHTML = html;

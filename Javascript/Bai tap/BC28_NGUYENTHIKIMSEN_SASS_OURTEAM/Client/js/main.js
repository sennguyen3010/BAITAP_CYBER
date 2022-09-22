// window.addEventListener('scroll', function () {
//   var header = document.querySelector('.header');
//   if (window.scrollY > 200) {
//     header.classList.toggle('sticky');
//   }
// });

window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 200);
});

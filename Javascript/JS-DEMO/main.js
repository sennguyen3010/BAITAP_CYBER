//import './styles.css';

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
  name: 'Costas',
  address: {
    street: 'Lalaland 12',
  },
};

//exercise 1:
var rsName = '';
companies.forEach(function (item, index) {
  //console.log(item.name, index);
  rsName += item.name + ': ' + index + '<br />';
});
document.querySelector('#kq1').innerHTML = rsName;

//exercise 2:
var companyAfter1987 = '';
companies.forEach(function (item, index) {
  var name = item.name;
  var start = item.start;
  if (start >= 1987) {
    companyAfter1987 += name + ': ' + start + '<br />';
  }
});

document.querySelector('#kq2').innerHTML = companyAfter1987;

//exercise 3:
//var companyRetail = [];

var companyss = companies.filter(function (item) {
  return item.category === 'Retail';
});
//console.log(companyss);
var text = '';
var companyRetail = companyss.forEach(function (item) {
  // text += item.name + item.category + item.start + item.end + '<br />';
  text += `<p>name: ${item.name} category: ${item.category} 
  start: ${item.start} end: ${item.end}</p>`;
});
document.querySelector('#kq3').innerHTML = text;

// exercise 4: ascend: tăng dần
var arr = [...companies];
var yearEndAscend = arr.sort(function (pt2, pt1) {
  //console.log(pt2);

  return pt2.end - pt1.end;
});
var rsYearEnd = '';
yearEndAscend.forEach(function (item) {
  rsYearEnd += `<p>name: ${item.name} category: ${item.category}
  start: ${item.start} end: ${item.end}</p>`;
});
document.querySelector('#kq4').innerHTML = rsYearEnd;

//exercise 5: decend: giảm dần
var ageDecend = ages.sort(function (pt2, pt1) {
  return pt1 - pt2;
});
document.querySelector('#kq5').innerHTML = ageDecend;

//exercise 6:
var sumAge = ages.reduce(function (total, currentValue) {
  return total + currentValue;
}, 0);
document.querySelector('#kq6').innerHTML = sumAge;

// var sumEnd = companies.reduce(function (total, currentValue) {
//   return total + currentValue.end;
// }, 0);
// console.log(sumEnd);

//exercise 7:
var [a, , , , , f] = companies;
var newArr = [a, f];
//console.log(newArr0);
var result = '';
newArr.forEach(function (item) {
  result += `<p>name: ${item.name} category: ${item.category}
start: ${item.start} end: ${item.end}</p>`;
});
document.querySelector('#kq7').innerHTML = result;

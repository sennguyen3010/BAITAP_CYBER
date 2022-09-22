const people = [
  {
    firstName: 'Sam',
    lastName: 'Hughes',
    DOB: '07/07/1978',
    department: 'Development',
    salary: '45000',
  },
  {
    firstName: 'Terri',
    lastName: 'Bishop',
    DOB: '02/04/1989',
    department: 'Development',
    salary: '35000',
  },
  {
    firstName: 'Jar',
    lastName: 'Burke',
    DOB: '11/01/1985',
    department: 'Marketing',
    salary: '38000',
  },
  {
    firstName: 'Julio',
    lastName: 'Miller',
    DOB: '12/07/1991',
    department: 'Sales',
    salary: '40000',
  },
  {
    firstName: 'Chester',
    lastName: 'Flores',
    DOB: '03/15/1988',
    department: 'Development',
    salary: '41000',
  },
  {
    firstName: 'Madison',
    lastName: 'Marshall',
    DOB: '09/22/1980',
    department: 'Sales',
    salary: '32000',
  },
  {
    firstName: 'Ava',
    lastName: 'Pena',
    DOB: '11/02/1986',
    department: 'Development',
    salary: '38000',
  },
  {
    firstName: 'Gabriella',
    lastName: 'Steward',
    DOB: '08/26/1994',
    department: 'Marketing',
    salary: '46000',
  },
  {
    firstName: 'Charles',
    lastName: 'Campbell',
    DOB: '09/04/1977',
    department: 'Sales',
    salary: '42000',
  },
  {
    firstName: 'Tiffany',
    lastName: 'Lambert',
    DOB: '05/11/1990',
    department: 'Development',
    salary: '34000',
  },
  {
    firstName: 'Antonio',
    lastName: 'Gonzalez',
    DOB: '03/24/1985',
    department: 'Office Management',
    salary: '49000',
  },
  {
    firstName: 'Aaron',
    lastName: 'Garrett',
    DOB: '09/04/1985',
    department: 'Development',
    salary: '39000',
  },
];

// Exercises

// 1) What is the average income of all the people in the array?

// 2) Who are the people that are currently older than 30?

// 3) Get a list of the people's full name (firstName and lastName).

// 4) Get a list of people in the array ordered from youngest to oldest.

// 5) How many people are there in each department?

// 1) average income
var averageIncome =
  people.reduce((total, item) => {
    return total + Number(item.salary);
  }, 0) / people.length;

document.querySelector('#kq2_1').innerHTML = averageIncome;

// 2) older than 30

var older30 = people.filter(
  (item) => new Date().getFullYear() - new Date(item.DOB).getFullYear() > 30
);
var rsOlder30 = '';
older30.forEach(
  (item) =>
    (rsOlder30 += `<p> firstName: ${item.firstName} DOB: ${item.DOB} </p>`)
);
document.querySelector('#kq2_2').innerHTML = rsOlder30;

// 3) full name
var rsListFullName = '';
//Cach 1:
// people.forEach(
//   (item) => (rsListFullName += `<p> ${item.firstName} ${item.lastName} </p>`)
// );

//cach 2:
people.map(
  ({ firstName, lastName }, index) =>
    (rsListFullName += `<p> ${index} ${firstName} ${lastName} </p>`)
);

//cach 3:
// people.map((item) => ({
//   ...item,
//   fullName: `${item.firstName} ${item.lastName}`,
// })); //thêm 1 key fullName:  vào array

document.querySelector('#kq2_3').innerHTML = rsListFullName;

// 4) ordered from youngest to oldest
var arrOrdered = people.sort(
  (pt2, pt1) => new Date(pt1.DOB) - new Date(pt2.DOB)
);
var rsOrdered = '';
arrOrdered.map(
  (item, index) =>
    (rsOrdered += `<p> ${index}: ${item.firstName} ${item.DOB} </p>`)
);
document.querySelector('#kq2_4').innerHTML = rsOrdered;

// 5) how many people are there in each department
// people.reduce((a, v) => (v === val ? a + 1 : a), 0);

// var occurrences = (arr, val) =>

//   occurrences(people, )

var rsDep = people.reduce(
  (accumulator, person) => ({
    ...accumulator,
    [person.department]: accumulator[person.department] + 1 || 1,
  }),
  {}
);
console.log(rsDep);

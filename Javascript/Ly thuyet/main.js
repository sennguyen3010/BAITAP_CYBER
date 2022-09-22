/*_____ Destructuring_____*/
// 1) Object
const note = {
  id: 1,
  title: 'My first note',
  date: '01/01/2022',
  author: {
    firstName: 'Sherlock',
    lastName: 'Holmes',
  },
};
//create variables from the object properties
var id = note.id;
var title = note.title;
var date = note.date;

//Destructure properties into variables (tạo biến mới có cùng tên với thuộc tính)
var { id, title, date } = note;
console.log(id); //1
console.log(title);
console.log(date); // 01/01/2022

//using forEach (huỷ cấu trúc keys và values trong object.entries())
Object.entries(note).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

//using a for loop
for (var [key, value] of Object.entries(note)) {
  console.log(`${key}: ${value}`);
}

//Assign a custom name to a destructured value (gán tên biến mới :)
var { id: noteId, title, date } = note;
console.log(noteId); // 1

// Access object and nested values (truy cập đối tượng và giá trị lồng nhau)
var {
  author,
  author: { firstName, lastName },
} = note;
console.log(author); //{firstName: "Sherlock", lastName: "Holmes"}

// 2) Array
var date = ['2022', '12', '01'];

var [year, , day] = date;
console.log(year);

/**----------Spread------------- */
// 1) Array
var tools = ['hammer', 'screwdriver'];
var otherTools = ['wrench', 'saw'];

//concatenate 2 arrays togerther (kết hợp 2 arr bằng hàm concat)
//var allTools = tools.concat(otherTools);

// using spread
var allTools = [...tools, ...otherTools];
console.log(allTools); //output: ["hammer", "screwdriver", "wrench", "saw"]

//ví dụ:
var users = [
  { id: 1, name: 'Ben' },
  { id: 2, name: 'Leslie' },
];

var newUser = { id: 1, name: 'Ron' };
//users.push(newUser);

var updatedUsers = [...users, { ...newUser }];
console.log(updatedUsers);

// thay đổi giá trị trong mảng
users.map((item, index) => {
  if (item.id == newUser.id) {
    item.name = newUser.name;
  }
});
console.log(users);
var update = [...users, { id: 1, name: 'Hung' }];
console.log(update);

/**--------Rest------------- */
function logger([a, b, ...rest]) {
  console.log(a);
  console.log(b);
  console.log(rest);
}
logger([2, 6, 12, 3, 4, 5]);

function number(...params) {
  console.log(params); // output: [1,2,3,4,5]
}
number(1, 2, 3, 4, 5);

//vd1:
var courses = [
  { stt: 1, name: 'js', price: 1000 },
  { stt: 2, name: 'ruby', price: 2000 },
  { stt: 3, name: 'python', price: 3000 },
];

var [a, b, c] = courses;
console.log(a, b, c);

//vd2: đổi tên biến
var course = {
  name: 'Javascript',
  price: 1000,
  image: 'image-address',
  children: {
    name: 'ReactJS',
  },
};
var {
  name: parentName,
  children: { name: childrenName },
} = course;
console.log(parentName);
console.log(childrenName);

//===Array Destructuring===//
// const numbers = [54, 65];
// const x = numbers[0];
// const y = numbers[1];
// console.log(x, y);

//Another
// const[x, y] = [54, 65];
// console.log(x, y);

//Another
const numbers = [12, 21, 105, 140, 200, 56];
const [x, y] = numbers;
console.log(x, y);

//Another
function boxify(num1){
    return [num1, num1 + 5];
}
// const boxed = boxify(8);
// console.log(boxed);

//array destructuring
const [box1, box2] = boxify(8); //Its a destructuring
console.log(box1, box2);

//===End Array Destructuring===//



//===Object Destructuring===//
// const person = {name: 'Jabbar', age: '23'};
// console.log(person);
// console.log(person);

//destructuring
const {name, age} = {name: 'Jabbar', age: 23};
console.log(name, age);

//another destructuring
const person = {name: 'Jabbar', money: 34, age: 23};
const {money} = person;
console.log(money);

//create object shortcut
const i = 25;
const j = 35;

const obj = {x: x, y: y};
console.log(obj);
const obj2 = {x, y};
console.log(obj2);
//===End Object Destructuring===//



//===Three Dots===//
//new array using three dots
const numbers2 = [12, 21, 105, 140, 200, 56];

numbers2.push = 20;
const newNumbers = [...numbers2, 20];
console.log(newNumbers);

//===End Three Dots===//

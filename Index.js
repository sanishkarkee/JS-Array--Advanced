const salad = [
  'Tomato',
  'Mushroom',
  'Brocolli',
  'Cucumber',
  'Corn',
  'Cabbage',
  'Papaya',
];

// console.log(salad[0]);
// console.log(salad[2]);
// console.log(salad[5]);

// Getting the element of an array
// for (let i = 0; i < salad.length; i++) {
//   console.log(`Element at ${i} is : ${salad[i]}`);
// }

//------------------------ Adding elements to the Array ------------------------
// 1) PUSH(X): push element to the end of the array, make changes directly to the original array
// const ret = salad.push('Peanuts');
// console.log(salad);
// console.log(ret); // Returns the array length after insertion

// 2) UNSHIFT(X): element at the START of the array, make changes directly to the original array
// const unRet = salad.unshift('Radish');
// console.log(unRet);
// console.log(salad);

//------------------------ Removing elements to the Array ------------------------
// 1) POP(): removes from END of an array | returns the removed element | make changes to original array
// const popRet = salad.pop();
// console.log(salad);
// console.log(popRet);

// 2) SHIFT(): removes from START of an array | make changes to original array | returns the removed element
// const shiftRet = salad.shift();
// console.log(salad);
// console.log(shiftRet);

// ------------------------ Copy array in JS ------------------------
// 1) SLICE():
// const saladCopy = salad.slice();
// console.log('Salad before copy', salad);
// console.log('Salad after copy', saladCopy);
// console.log(saladCopy === salad); // false: they are 2 different arrays although the content are same

// 2) isArray(X):
// Array.isArray([
//   'Tomato',
//   'Mushroom',
//   'Brocolli',
//   'Cucumber',
//   'Corn',
//   'Cabbage',
//   'Papaya',
// ]);
// Array.isArray('potato');
// Array.isArray({ name: 'sanish' });
// Array.isArray([]);

// const arr = [1, 2, 3, 4];
// Array.isArray(arr);

// ------------------------ ARRAY DESTRUCTURING ------------------------
// const [car, bike, ship, plane] = [
//   'lamborghini Adventador ',
//   'Yamaha R1',
//   'Titanic',
//   'F22-Raptor',
// ];
// console.log(car, bike, ship, plane);

// const [car1, bike1 = 'Honda CBR1000'] = ['Lamborghini'];
// console.log(car1, bike1);

// ------------------------ NESTED ARRAY ------------------------
// const random = [1, 2, 'b', ['a', 6, 'main']];
// // Array destructuring. Objective: we have to select 'main'
// random[3][2];

// ------------------------  (...REST): goes with variables | (SPREAD...): goes with arrays values, clone/copy existing array ------------------------
//REST
// const [apple, pears, ...rest] = ['🍎', '🍐', '🍇', '🥭', '🥑', '🍊'];
// console.log(
//   '...REST:',
//   'Apple:',
//   apple,
//   'Pears:',
//   pears,
//   'Other remaining fruits:',
//   rest
// );

//SPREAD
// const mySalad = ['🍎', '🍐', '🍇', '🥭', '🥑', '🍊'];
// const mySaladCopy = [...mySalad];
// console.log('SPREAD...:', mySaladCopy);

// ------------------------ Swapping values with Destructuring ------------------------
// let first = '😀';
// let second = '🤪';

// let [newFirst, newSecond] = [second, first];
// console.log('New First:', newFirst, 'New Second:', newSecond);

// ------------------------ Merge two Array and create one single Array ------------------------
// const emotions = ['😃', '😇'];
// const veggies = ['🍇', '🍉', '🍓', '🫐'];
// const newArray = [...emotions, ...veggies];
// console.log('New Array is:', newArray);

// ------------------------ LENGTH property in JS ------------------------
// const arr1 = [7, 74, 98, 35];
// console.log(arr1.length);

// An Array can hold upto 2^32 -1 elements i.e, 4294967295 elements

// arr1.length = 2;
// console.log(arr1);

// ------------------------ ARRAY METHODS ------------------------
// 1) concat(): merges one or more array and return merged array
// const first = [1, 2, 3];
// const second = [4, 5, 6];
// const merged = first.concat(second);
// console.log(merged);  // [1, 2, 3, 4, 5, 6];

// 2) Join(): Joins all the elements of an array using an SEPERATOR and returns a STRING
// const fruits = ['🍇', '🍉', '🍓', '🫐'];
// const joined = fruits.join('<=>');
// console.log(joined);   // 🍇<=>🍉<=>🍓<=>🫐

// 3) Fill():
// const colors = ['Red', 'Blue', 'Green', 'Brown', 'Magneta'];
// colors.fill('Pink', 1, 4);
// console.log(colors); // ['Pink','Pink','Pink']

// 4) includes():  if element is present in array>>returns TRUE otherwise False
// const names = ['Ram', 'Hari', 'Sita', 'Raju', 'Tom', 'Bob'];
// console.log(names.includes('Tom'));
// console.log(names.includes('john'));

// ✅ 5) indexOf(): when we want of know the index position  if an element, element repeat xa bhane first ma aaune ko index return garxa, find garena bhane returns  -1
// const names = ['Ram', 'Hari', 'Sita', 'Raju', 'Tom', 'Bob'];
// console.log(names.indexOf('Raju')); // 3
// console.log(names.indexOf('Eminem')); // -1

// 6) lastIndexOf(): repeated elements haru ko last wala ko index return garxa
// const names = ['tom', 'hardy', 'cruise', 'holland', 'brady', 'tom'];
// console.log(names.lastIndexOf('tom'));

// 7) reverse(): reverse the elements position in an array
// const names = ['tom', 'hardy', 'cruise', 'holland'];
// console.log(names.reverse());

// 8) sort(): the default sort methods converts the elements types into strings | the default sorting order is ascending.
// const names = ['tom', 'hardy', 'cruise', 'holland', 'brady', 'hanks'];
// console.log('After default sorting:', names.sort()); // By default it sorts in Ascending order

// ✅ 9) splice(): delete, add, modify elements in an array ,from any index in an array
// const names = ['tom', 'alex', 'bob'];
// console.log('Output of splice:', names.splice(0, 1, 'john')); // ['tom'] : 'tom' gets deleted from the array ,so the deleted array is returned
// console.log('Original array becomes:', names); // ['john', 'alex', 'bob']

// console.log(names.splice(1, 0, 'Zack')); // OP: ["tom",'zack', 'alex', 'bob']

// console.log(names.splice(2, 1, 'zack')); //OP: ['bob']
// console.log(names); // OP: ['tom','alex','zack']

// 10) **Didnt understand **  at(): retrieve elements using both positive and negetive indexes. Left-right: 0, 1, 2...  |  Right-left: -1, -2, ........
// const junkFoodILove = ['🥪', '🍔', '🍕', '🌭', '🥞', '🌯', '🌮', '🍿'];

// If you want to retrieve 'popcorn"
// console.log(junkFoodILove.at(0)); // 🥪
// console.log(junkFoodILove.at(3)); // 🌭
// console.log(junkFoodILove.at(-1)); //🍿
// console.log(junkFoodILove.at(-5)); // 🌭
// console.log(junkFoodILove.at(-8)); // 🥪
// console.log(junkFoodILove.at(-12)); // undefined

// 11) flat(): Array bhitra ko array ko content lai single array ma show garna. array bhitra multiple arrays xa bhane .flat() le euta array remove garna help garxa, so sabai array hatauna xa bhane jati ota array xa teti ota nai .flat() use garna parxa
// const arr1 = [1, 2, 3, 4, [5, 6, 7]];
// console.log(arr1.flat()); // [1, 2, 3, 4, 5, 6, 7];

// const arr2 = [0, 1, [2, [3, [4, 5]]]];
// console.log(arr2.flat().flat().flat()); // [0, 1, 2, 3, 4, 5]
// OR
// console.log(arr2.flat(Impornfinity));

// ------------------------ Grouping data in an ARRAY ------------------------
// there are different types of data ,but assume objects inside array
// let students = [
//   { name: 'Tom', age: 10, dept: 'Engineering', salary: 5000 },
//   { name: 'Alex', age: 12, dept: 'HR', salary: 3000 },
//   { name: 'Sara', age: 11, dept: 'Engineering', salary: 7000 },
//   { name: 'John', age: 68, dept: 'Engineering', salary: 1000 },
//   { name: 'Bob', age: 46, dept: 'Sales', salary: 6000 },
// ];

// const groupedByDept = Object.groupBy(students, ({ dept }) => dept);
// console.log(groupedByDept);

// we can group by condition: based on salary 5000
// const groupedByMoreThan5000 = Object.groupBy(students, ({ salary }) => {
//   return salary >= 5000 ? 'More than 5000' : ' Less than 5000';
// });
// console.log(groupedByMoreThan5000);

// ------------------------ IMMUTUABILITY ------------------------
// we dont directly change tha data in Array,Objects, Variables directly, instead we make copy of it and make changes to the copy. Yedi project ma 'STATE , REDUX' ko concept use gareko xa bhane IMMUTUABILITY ko concept use garnu parxa. 👉 General habit is: ✅ For shared data / state → immutable ✅ For local temporary data → mutable is okay if safe

// 1) toReversed(): reverse elements of an array but with IMMUTUABILITY
// const items = [1, 2, 3];

// const copyItems = items.toReversed();
// console.log(copyItems); // [3, 2, 1]  | making copy of original array here
// console.log(items); // [1, 2, 3]

// 2) toSorted():  sort the order of the elements of an array but with IMMUTUABILITY
// const months = ['Jan', 'Feb', 'Mar', 'Apr'];

// const sortedMonths = months.toSorted();
// console.log(sortedMonths); // ['Apr', 'Feb', 'Jan', 'Mar']
// console.log(months); // ['Jan', 'Feb', 'Mar', 'Apr']

// 3) toSpliced(): array elements lai modify garna but with IMMUTUABILITY
// const months = ['Jan', 'Mar', 'Apr', 'May'];
// const splicedMonths = months.toSpliced(1, 0, 'Feb');
// console.log('Spliced months:', splicedMonths); // ['Jan', 'Feb', 'Mar', 'Apr', 'May']
// console.log('Original months:', months); // ['Jan', 'Mar', 'Apr', 'May']

// 4) with(): It lets you change ONE item/element in an array without changing the original array.
// const numbers = [2, 7, 34, 87, 48];
// const withNumber = numbers.with(1, 'Ram');
// console.log('Modified Array:', withNumber);
// console.log('Original Array:', numbers);

// ------------------------ ARRAY-LIKE ------------------------
// Array-like: It is an OBJECT that has some behaviour like array, it has an index to access an element. " when you want to use elements of Array-like then , WE HAVE TO CONVERT Array-like TO AN ARRAY"

// const arr_like = { 0: 'r', 1: 'am', 2: 'array-like', length: 3 };
// console.log(arr_like);

// console.log(arr_like[2]); // OP: array-like
// console.log(arr_like.length); // OP: 3

// console.log('Is arr_like is an Array?', Array.isArray(arr_like)); // OP: false

function checkArgs() {
  console.log(arguments);
  console.log([...arguments, Array.isArray([...arguments])]); // converting array-like to an array , METHOD 1: Using spread operator ,and checking if its an array
}
checkArgs(1, 2);

// Method 2: Converting array-like to Array
console.log('HTML collection as an Array', document.getElementsByTagName('li'));

const collectionArr = Array.from(document.getElementsByTagName('li'));
console.log('Converted Array', collectionArr, Array.isArray(collectionArr));

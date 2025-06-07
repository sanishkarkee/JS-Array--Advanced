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

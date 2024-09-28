const max = Math.max(5,5,2,32,34,52,200);
// console.log(max); // output 200

const num = [3, 32, 31, 300];
// const arrayMax = Math.max(num);
//console.log(arrayMax) // output NaN can not arraymax value with Math.max
console.log(...num)
const arrayMax = Math.max(...num);
console.log(arrayMax)

// array hold the same place in the memory with reassigning

const friend = [3, 32, 34, 42];
const bondhu = friend;
let dosto = [...friend] // it seprates the array and make a copy on another place of memory so it will not take the push
const dosto2 =[...friend, 100]; // adding new item to array with spread method
bondhu.push(102);
console.log(bondhu);
console.log(friend);
console.log(dosto) ;
console.log(dosto2) ;
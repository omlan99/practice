const number = [1, 2, 3, 4, 5];
function  double (num){
    return num * 2;
}

const result = number.map(double);
console.log(result)
const result2 = number.map(num => num * 2);
// console.log(result2)

const friends = ['tom', 'com', 'bom'];
const frinend = friends.map(friend => friend[0]);
// console.log(frinend);
function min(nums) { return Math.min(nums) }
// console.log(min( [1,3,2 ]));
const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
// console.log(output);

// what will be the value of y? 

const {x, y, z} = {x: 1, y1: 2, z: 3};
// console.log(y)

const [a, b] = [1,2,3,4,45,5]; 
// console.log(a+b);
const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}
const { model } = product;
// console.log(model); // Output: 49000
const cube=x=> x*x*x; 
// console.log(cube(2))
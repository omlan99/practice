// function declaration
// function add(a, b){
//     return sum = a+b;
// }
// function expression
const sum = (a,b) => a+b;

// console.log(sum(5,2));

// student object
const student = {
    name : "Moni",
    nickName :"sonaMoni",
    age : 100
}

// arrow function with signgle parameter to get age from object
const getAge = (age) => student.age;
// console.log(getAge(student));

// roll array 
let roll = [11, 12, 20, 50];

// arrow function with single parameter wtihout parentheses
const first = num => num[0];
// console.log(first(roll));

// arrow function  wtihout parameter 
const getPi = () => Math.PI;
// console.log( getPi())
// console.log(typeof getPi().toFixed) //Output : string
// console.log(typeof getPi()) //Output : Number

// big functionn with arrow you have to write return

const total = (x, y, z) => {
    const sum = x+y+z;
    const mult = x*y*z;
    return mult + sum ;
}

// console.log(total(1, 2, 3));

// arrow function argument test
// const arguement = () => console.log(arguements);
//  console.log(arguement)

//  fuction regualar(){
//     console.log(arguement);
//  }
//  const printt = regualar()
function arrowFunc () {
    console.log(arguments);
}
arrowFunc(2,3,5);
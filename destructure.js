const actor =  {
    name : "ananta",
    age : 32,
    money : 233223
}
const name = actor.name;
// console.log(name)

// destructuring a object using a key as a variable to get object property value
const {age, money} = actor;
// console.log(age)
// console.log(money)
// changing property name of a object
const {age:boyos} = actor;
// console.log(boyos)
console.log(actor.name)

// destructring a array
const num = [100, 53, 56, 65, 57];
const [x, y]= num;
console.log(x);

function add (a, b){
    return [a+5, b+5];

}
const [, second] = add(5,7);
console.log(second)
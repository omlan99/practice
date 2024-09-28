// write an arrow function that will do the following
// it will take an array where array element will be name of your friends
// check if the length of each element is even push element with even length to a new and return the result

const length = array => {
    const result = [];
    for(const element of array){
        if(element.length % 2 === 0){
            result.push(element)
            console.log(result)
        }
    }
    return result
}

const friend = ["Marku", "Buffetb", "Bill", "Musk"]
// console.log(length(friend));

const squareSum = arr => {
    const sum = []
    for(const num of arr){
        const square = num * num
        sum.push(square)
    }
    return sum

}
const numbers = [2, 4, 3];
console.log(squareSum(numbers))
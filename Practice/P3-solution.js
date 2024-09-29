// write an arrow function that will square the array element calculate the sum of squared element and return the average of squared element

//  solution using for loop 
const squareSumAvg = arr => {
    const square = arr.map(num => num*num);
    // const sumOfSquare = square.reduce((arg1, arg2) => arg1 + arg2)
    let sum = 0
    for(const num of square){
         sum = sum + num
    }
    const average = sum / arr.length
    return average
   }
   const numbers = [2, 4, 3];
//    console.log(squareSumAvg(numbers))


 
//    solution using reduce method

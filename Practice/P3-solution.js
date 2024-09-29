// write an arrow function that will square the array element calculate the sum of squared element and return the average of squared element

//  solution using for loop 
const squareSumAvg = arr => {
    const square = arr.map(num => num*num);
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
const squareSumAvg2 = arr =>{
          // mapping the array to get array element one by one
         const square = arr.map(num => num*num);
          // reduce take two arguement and add them
         const sumOfSquare = square.reduce((arg1, arg2) => arg1 + arg2)
          // average calculation
         const average = sumOfSquare / arr.length;
         return average;
}
   console.log(squareSumAvg2(numbers))

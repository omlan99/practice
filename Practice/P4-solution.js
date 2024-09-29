// write an arrow function that will do the following]
// 1) it will take two array inputs
// 2) Combine the two array and assign them in new array
// 3) find the maximum number of new array and return the result

const maxArrayNumber = (arr1, arr2) => {
    // combining two array with spread
    const combineArray = [...arr1, ...arr2];
    // getting the max number of array with spread 
    const maxNum = Math.max(...combineArray);
    return console.log(maxNum)
}
const array1 = [12, 42, 41, 50, 99];
const array2 = [21, 22, 14, 5, 36];


maxArrayNumber(array1, array2)
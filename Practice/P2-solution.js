// write an arrow function that will do the following
// it will take an array where array element will be name of your friends
// check if the length of each element is even push element with even length to a new and return the result

// creating a length function to check even length array and return a array
const length = array => {
    const result = [];
    for(const element of array){
        if(element.length % 2 === 0){
            result.push(element)
        }
    }
    return result
}

const friend = ["Marku", "Buffetb", "Bill", "Musk"]
console.log(length(friend));


//  doing the same thing with filter 
const result = friend.filter(str => str.length % 2 === 0);
console.log(result)


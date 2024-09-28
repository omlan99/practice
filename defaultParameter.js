// create a function

function add(num1, num2){
    const result = num1 + num2;
     console.log(num1, num2,result);
     return result;
}
// without argument
// const sum = add( )
// result : undefined undefined NaN

// witha a argument
// const sum = add(5, )
// result : 5 undefined NaN

// function with a default value 
function add2(num3= 10, num4 =20){
    const result = num3 + num4;
    console.log(num3, num4, result);
    return result;
}
// without arguement
// const total = add2();
// result : 10 20 30
// with a argument
const total = add2(5);
// result : 5 20 25
// with argument
// const total = add2(5, 2);
// result : 5 2 7
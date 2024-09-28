const car = {
    name : "tesla",
    model : "xyz",
    tire : "mazda",
    price : 3223223

}

// for it function on object to get property name amarMondu
for(const amarMatha in car){
    // getting object value
    const amarMondu = car[amarMatha]
    // console.log(amarMatha,amarMondu )
}

// getting value with for of function
const amarMatha= Object.keys(car);
// console.log(amarMatha);
for(const keys of amarMatha){
    const value = car[keys]
    // console.log(keys, value)
}
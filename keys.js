const car = {
    name : "tesla",
    model : "xyz",
    tire : "mazda",
    price : 3223223

}
// adding new properties
car.parked = "backyard"
// getting property name
const propertyName = Object.keys(car);
console.log(propertyName)
// getting property value
const propetyValue = Object.values(car);
// console.log(propetyValue)
// getting all properties
const property = Object.entries(car);
// console.log(property)
// deleting properties
delete car.price;
// console.log(car)
// copying object without selected item spread and destructure method
const {tire, ...remainCar} = car

// console.log(remainCar)

// freeze to not modify object
Object.freeze(car);
car.owner = "ME";
// console.log(car)
// can not delete or add any property on object can modify the values of keys
Object.seal(car)

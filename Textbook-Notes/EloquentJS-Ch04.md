# Chapter 04 - Data Structures: Objects and Arrays

### Objects
- Reading a property that doesn't exist will give you the value undefined 
- It is possible to assign a value to a property expression with the `=` operator. This will replace the property's value if it already existed or create a new property in the object if it didn't 
- The `delete` operator is a unary operator that, when applied to an object property, will remove the named property from the object
  - Note: This is not a common thing to do, just know that it is possible
- The binary `in` operator, when applied to a string and an object, tells you whether that object has a property with that name
```javascript 
let anObject = {
    left: 1, 
    right: 2
}; 
delete anObject.left; 
console.log("left" in anObject); // prints false
cosnole.log("right" in anobject); // prints true
```
- To find out what properties an object has we can use the `Object.keys()` function. This function requires us to pass in an object and it will return an array of strings which are the object's property names. For example, to use this function on the code snippet above we would simply call `Object.keys(anObject)` and this would return `["right"]` (remember we deleted the left property)


### Mutability 

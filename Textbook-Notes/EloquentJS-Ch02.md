# Chapter 02 - Program Structure 

### Breaking out of a Loop: 
- The keyword `break` has the effect of immedeiately out of the entire enclosing for loop. It common to nest a coniditonal statement within our foor loop and when the condition we are seeking is met we break from the entirety of the for loop 
```javascript 
for(number = 0; number <= 20; number++) {
    if (number === 4) {
        break; 
    }
    console.log(number)
}
// Prints numbers from 0 - 3, then the loop breaks when number equals 4, so numbers 5 - 20 will NOT be printed
```
- A similar keyword is `continue` and it jumps to the next iteration of the loop
```javascript
for(number = 0; number <= 20; number++) {
    if (number === 4) {
        continue; 
    }
    console.log(number)
}
// Prints numbers from 0 - 20 but the number 4 is specifically skipped 
```
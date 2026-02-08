# Chapter 1 - Values, Types, and Operators 

### Logical Operators: 
- The `&&` operator represents logical and. It is a binary operator, and its reslt is true only if both the values given to it are true 
- The `||` operator denotes logical or. It produces true if either of the values given to it is true
- Not is written as an exclamation mark `!`. It is a unary operator that flips the value given to it - `!true` produces `false` and `!false` produces true 
- The last logical operator we will look at is not unary, not binary, but *tenary*, operating on three values. It is written with a question mark and a colon like this: `a ? b : c`
  - The operator uses the value to the left of the question mar to decide which of the two other values to "pick." So in the example above, the result will be `b` if `a` is true and `c` otherwise. 
- `===` checks whether two values are perciesely equal to each other (must be of same type)
  - Huge difference from `==` (i.e. `5 == "5"` yields `true` whereas `5 === "5"` yields `false` as they are not of the same type) 
- `!==` checks whether two values are not precisely equal (including type)

### Short-Circuiting of Logical Operators: 
- The `||` operator, will return the value to its left when that value can be converted to true and will return the value on its right otherwise
```javascript 
console.log(null || "user")
// prints user 
console.log("Agnes" || "user")
// prints Agnes
```
- We can utilize this functionality as a way to fall back on a default value. If you have a value that might be empty, you can put `||` after it with a replacement on the right-hand side
- Note: `0`, `NaN`, and the empty string `""` counts as `false`, while other values count as `true` when type converting
- The `??` operator resembles the `||` but returns the value on the right only if the one on the left is `null` or `undefined`, not if it is some other value that can converted to `false`. Often, this is preferable to the behavior of `||`. 
```javascript
console.log(0 ?? 100)
// prints 0 
console.log(null ?? 100)
// prints 100 
```
- The `&&` operator checks the value to its left, if it something that converts to `false`, then it returns that value, and otherwise it returns the value to its right
> Key Takeaway: These operators only evaluate the right hand side of it when it is necessary. So for `||` it is necessary to check the right if the left is `false`. For the `&&` it is necessary to check the right of the left is `true`. And for the `??` it is necessary to check the right if the left is `null` or `undefined`. 
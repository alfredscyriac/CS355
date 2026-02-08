# Chapter 03 - Functions 

### Call Stack 
- The place where the computer stores context when functions are called is known as the call stack. Every time a function is called, the current context is stored on top of this stack. When a function returns, it removes the top context from the stack and uses that context to continue execution 

### Optional Arguments
- JavaScript is extremely broad-minded about the number of arguments you can pass to a function. 
  - If you pass too many, the extra ones are ignored
  - If you pass too few, the missing parameters are assigned the value `undefined`
- If you write an = operator after a parameter, followed by an expression, the value of that expression will replace the argument when it is not given
```javascript
function greeting(username = "user") { 
    console.log("Greetings, " + username); 
}
greeting("Alfred"); // prints: Greetings, Alfred 
greeting(); // prints: Greetings, user 
```
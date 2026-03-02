# CS 355 - Topic 3: Asynchronous Programming

**Dates:** February 18, 2026 and February 23, 2026
---

### Why do we need asynchronous programming? 
- We are accustomed to a procedural style of programming where statements are executed top down. Code written in this style share the feature that they are blocking
- **Blocking**: The next task cannot be completed until the previous task has completed 
- This style of programming may work fine for local applications thar run near instantaneously, but when we have network calls in the mix, this could cause our application to get stuck stalling as it waits for data
```javascript
taskA(); // Network request
taskB();
```
- In the above code block, imagine the network request in `taskA` takes an extended amount of time to complete. `taskB` will be waiting for `taskA` to complete to start. This is extremely inefficient as a network instabilitiy could cause our entire application to be locked up 
- Example of Procedural Programming: 
```javascript
for(let i = 0; i < 1000000000; i++){
    // Intentionally blank
}
console.log("Finished"); 
```
- While the above code block is executing you would NOT be able to interact with it's corresponding webpage (absolutely all features will disabled). After 10 or so second when the for loop finishes and and the "Finished" statement prints, all blocked commands the user tried to perform during the disabled period quickly fire. This is a horrible user experience and a horrible way for an application to function
- Example of Asynchronous Programming: 
```javascript
setTimeout(
    function(){
        console.log("Finished"); 
    }
, 10000); 
```
- The above code block is far superior to the one directly above it due to the fact the user is able to interact with the page and everything works as intended and after roughly 10 seconds or so "Finished" is printed

### What are callbacks? 
- A **callback** is a function passed as an argument to another function to be executed later (once some task completes)
- In the last code block (the one featuring `setTimeout`), the anonymous function passed in is a callback and it gets called back after the timer expires 
- Callbacks are the foundation of asynchronous programming in JavaScript

## What is the event loop? 
- JavaScript by default is single-threaded meaning it can only do one thing at a time 
- JavaScript achieves asynchronous behavior through the event loop, which coordinates between the call stack and a task queue 
- When an asynchronous operation is triggered (such as `setTimeout` or any other network request), it is offloaded to an external runtime environment (this external runtime would be the browser if your code runs on a webpage, and it would Node.js if the code runs on a server) to handle in the background while the JavaScript code continues executing 
- Once the asynchronous operation completes, its callback is placed in the callback queue 
- The event loop continuously checks to see if the call stack is empty, if it is ever empty, it picks up the next callback from the queue and executes it 
- This is why in the earlier example `setTimeout` did not freeze the page because the timer ran in the background and the rest of the code kept executing normally 
- Flow diagram of the event loop: 
```
Call Stack → runs synchronous code
     ↓
Async task offloaded to runtime (e.g. timer, network call)
     ↓
Callback placed in Callback Queue when done
     ↓
Event Loop moves callback to Call Stack when stack is empty
```

### What is Node.js? 
- The Node.js runttime is powdered by the open source V8 JavaScript engine 
- JavaScript is single-threaded
- As a developer, you can make specific calls to Node.js's API's, which uses threads to accomplish asynchronous programming 
- API (Application Programming Interface): A collection of public functions, methods, and variables that form a way to interact with some (typically built in) utility
- Typically we can use API's by just calling their public interface methods like `fs.readFile()` or `navigator.geolocation.getCurrentPosition()`

### Node.js Architecture 
- Layer 1: Node.js Application 
- Layer 2: Node.js API (JavaScript)
- Layer 3: Node.js Bindings (JavaScript to C/C++) | Node.js Standard Library (Core Modules) | C/C++ AddOns
- Layer 4: V8 (JavaScript Engine) | LibUv (Library) | c-ares | llhttp/http-parser | open-ssl | zlib
- Layer 5: Operating System 
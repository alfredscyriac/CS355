# CS355 - Course Intro

**Date:** January 26, 2026  
---

## JavaScript Overview:
- JavaScript is: 
    - Multi-paradigm
    - Procedural 
    - Functional 
    - Event-driven 
    - Object-oriented
    - Weakly typed
- JavaScript can be considered more object-oriented than Java
- Creating an object in JavaScript (without having to create a class): 
```javascript
let myfraction = {
    num: 3, 
    den: 4, 
    toDecimal: function() { return this.num / this.den }
};
```

## Compiled vs Interpreted Languages
- Compiled Languages (C, C++, Rust, ...)
  - Source code -> Compile -> Machine Code -> Executable -> Run -> Output 
- Intepretted Languages (Python, PHP, ...)
  - Source Code -> Interpreter -> Output
- Compiled languages tend to be faster because: 
  - Compiler optimizations such as (loop unraveling, dead code elimination, ...)
  - The compilation is slow because of these optimization BUT because of it, the code can RUN fast
- JavaScript is both compiled AND interpreted 
  - The JavaScript engine (v8) has a JavaScript interpreter (Ignition) and a JavaScript compiler (Turbofan)
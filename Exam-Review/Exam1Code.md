# Exam 1 Coding Question Study Guide 

## API Reference 

### fs.readFile(path, options, callback)
- path: string that indicates which file path to read from
- options: "utf8" for text, and null for raw binary 
- Reading a file code: 
```javascript
const fs = require("fs"); 

fs.readFile("input/file.txt", "utf8", after_read); 
function after_read(err, data){
    if (err){
        console.error("Error", err); 
        return; 
    }
    console.log(data); 
}
```

### fs.writeFile(path, data, callback)
> writeFile only gives the callback function one argument which is error
- path: string that indicates which file path to read from
- data: string which is the data that will be written in the file(s)
- Writing a file code: 
```javascript
const fs = require("fs"); 

fs.writeFile("output/result.txt", "Hello World", after_write); 
function after_write(err){
    if (err) {
        console.error("Error", err); 
        return; 
    }
    console.log("Done Writing"); 
}
```

### dns.resolve(hostname, callback)
- hostname: a string with a domain name (ex: "alfredscyriac.com")
- callback(err, records): records is an array of ip address strings 
- records[0]: use this when the problem says only one IP per domain 
- DNS Resolution Code Example: 
```javascript
const dns = require("dns"); 

const hostname = "alfredscyriac.com"; 

dns.resolve(hostname, after_resolution); 
function after_resolution(err, records){
    if (err){
        console.error("Error", err); 
    }
    console.log(hostname, records); 
}
```

### zlib.deflate(data, callback)
- data: is a string which is the data that is to be compressed 
- callback(err, buffer): the buffer is the compresed binary result 
- Zlib Deflate Code Example: 
```javascript
const zlib = require("zlib"); 
const fs = require("fs"); 

const data = "Hello World"; 

zlib.deflate(data, after_compression); 
function after_compression(err, buffer){
    if(err) {
        console.error("Error", err); 
        return; 
    }
    fs.writeFile("output/output.txt",buffer,after_write); 
    function after_write(err){
        if (err) {
            console.error("Error", err); 
            return;
        }
        console.log("Finished Writing Compressed Data"); 
    }
}
```

### zlib.inflate(data, callback)
- data: compressed binary data that is to be inflated 
- callback(err, buf): buf is a buffer and you can run buf.toString("utf8") to get a string
- Zlib Inflate Code Example: 
```javascript
const zlib = require("zlib"); 

const buffer = "hello"; // imagine this was something binary 

zlib.inflate(buffer, after_inflation); 
function after_inflation(err, buf){
    if(err){
        console.error("Error", err); 
        return; 
    }
    const text = buf.toString("utf8"); 
    console.log(text); 
}
```

## Common Coding Patterns 

### Pattern 1 - N Tasks Concurrently (with completion counter)
- The core idea is to fire all N async calls immediately. Each callback increements a counter. When the counter === N, all tasks are done. That's when the final step is run 
- Code Template: 
```javascript
const fs = require("fs"); 

const n = 5; 
const output_directory = "output/"
let count = 0; 

for(let i = 1; i <= n; i++){
    const filename = `${output_directory}${i.toString().padStart(2,"0")}-output.txt`; 
    write(i, filename);  
}

function write(i, filename){
    fs.writeFile(filename, "Hello World", after_write); 
    function after_write(err){
        if (err){
            console.error("Error", err); 
            return; 
        }
        count += 1;
        console.log(`Wrote File: ${filename}`); 
        if (count === n) {
            console.log("Writing Files Complete"); 
        }
    }
}
```

### Pattern 2 - N Tasks Sequentially (Recursive CPS)
- The core idea is to a recursive function that takes utilizes a count variable
- Code Template: 
```javascript
const fs = require("fs"); 
const n = 5; 

let count = 1; 
const output_directory = "output/"; 
let pathname = `${output_directory}${count.toString().padStart(2,"0")}-output.txt`; 

fs.writeFile(pathname, "Hello World", after_write); 
function after_write(err){
    if (err) {
        console.error("Error", err); 
        return; 
    }
    count += 1; 
    if(count > n){
        console.log("Writing Complete"); 
    } else {
        pathname = `${output_directory}${count.toString().padStart(2,"0")}-output.txt`;
        fs.writeFile(pathname, "Hello World", after_write); 
    }
}
```
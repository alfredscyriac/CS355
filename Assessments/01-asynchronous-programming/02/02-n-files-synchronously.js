/*
Writing N Files Synchronously
- Allowed Node.js API Functions: fs.writeFile()
- Input: Integer n  (0 < n < 100)
- Output: n Files

Create a program that  synchronously write n files 01-output.txt up to 99-output.txt to a subdirectory output.  Each file should contain the text "Data-2".   After each successful fs.writeFile() print a message to console with the filename.  After all n files are finished, print an additional message Writing Complete Run the script a few times, the filenames printed should always be in order.  
*/

const fs = require("fs");
const n = 5; // input size 0 < n < 100

const outputDirectory = "./output"; 
const data = "Data-2"; 

// If you ever see synchronously with regard to asynchronous programming you should automatically be thinking recursively
// In this case write the first file and then inside the callback you make a recursive call to write the second file and so on 
// The reason for that is because this way you can only start writing the second file after the first one finishes which mimics blocking style of programming
// Closures aren't required for this type of scynchronous behavior 

writeSync(1); 
function writeSync(i){
    let file = `${i.toString().padStart(2,"0")}-output.txt`; 
    let path = `${outputDirectory}/${file}`; 
    
    fs.writeFile(path, data, (err) => afterWrite(i,file)); 
}

function afterWrite(i, file){
    console.log(`Finished Writing File: ${file}`); 
    if(i == n){
        console.log("Writing Complete"); 
    }
    else {
        writeSync(i+1);   
    } 
}



/* 
Writing N Files Asynchronously
- Allowed Node.js API Functions: fs.writeFile()
- Input: Integer n  (0 < n < 100)
- Output: n Files

Create a program that asynchronously write n files 01-output.txt up to 99-output.txt to a subdirectory output.  Each file should contain the text "Data-1".  After each successful write, print a message to console with the filename.  After all n files are finished writing, print an additional message Writing Complete.  Run the script a few times, the filenames printed should almost never be in order.
*/

const fs = require("fs");
const n = 5;	// input size 0 < n < 100

const outputDirectory = "./output"; 
const data = "Data-1"; 

let written = 0; 

for(let i = 0; i < n; i++){ 
    let file = `${i.toString().padStart(2,"0")}-output.txt`; 
    let path = `${outputDirectory}/${file}`; 

    fs.writeFile(path, data, afterWrite); 

    function afterWrite(){
        console.log(`Finished Writing File ${file}`); 

        written += 1; 
        if(written == n){
            console.log("Writing Complete"); 
        }
    }
}
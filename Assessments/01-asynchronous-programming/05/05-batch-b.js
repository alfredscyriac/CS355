/*
batch-b
- Allowed Node.js API Functions: fs.readFile(), fs.writeFile()
- I've also usedfs.readdirSync() in the template which will get the filenames of all files in a directory and put them into an array.
-Input: 
    - n  (0 < n < 100) Files
    - Integer b (0 < b < n)
- Output: Files

Create a program that asynchronously reads n files 01-input.txt up to 99-input.txt.

For every b files read, write the contents of those input files to the next output file.  Use "utf8" encoding.  If there are fewer than b input files remaining, put the remaining content in the last output file.

Use the format 01-output.txt to m-output.txt (Pad filename with 0 if m < 10)

In total there should be m files where m = Math.Ceil(n / b) 
*/
const fs = require("fs");
const input_dir = "./input/";
const output_dir = "./output/";
const input_files = fs.readdirSync(input_dir);

const n = input_files.length;	//input size 0 < n < 100
const b = 5;					//input size 0 < b < n

let files_read = 0; 
let output_number = 0; 

for(let i=0; i < n; i++){
    let input_path = `${input_dir}${input_files[i]}`; 
    fs.readFile(input_path, "utf8", after_read); 
}

function after_read(){
    files_read += 1; 
    if(files_read % b === 0 || files_read === n){
        let output_filename = `${output_dir}${output_number.toString().padStart(2,"0")}`

    }
}
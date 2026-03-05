const fs = require("fs");
const n = 5;	// input size 0 < n < 100

const outputDirectory = "./output";
const data = "Data-1";  
let written = 0; 

for(let i = 0; i < 100; i++){
    let filename = `${i.toString().padStart(2,"0")}-output.txt`; 
    let path = `${outputDirectory}/${filename}`; 
    fs.writeFile(path, data, after_write); 
    function after_write(err){
        if(err){
            throw err; 
        }
        written += 1;
        console.log(`Finished Writing File ${file}`);
        if(written == n) {
            console.log("Writing Complete");
        }
    }
}
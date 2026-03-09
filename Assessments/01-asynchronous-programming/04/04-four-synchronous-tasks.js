/*
Four synchronous tasks
- Allowed Node.js API Functions: fs.readFile(), zlib.inflate(), dns.resolve(), fs.writeFile()
- Input: domain.deflated
- Output: File: ip_address.txt

Write a program that:
1. Reads domain.deflated (Use {encoding:null} ), 
2. Decompresses the contents using zlib.inflate(), covert the resulting buffer to a string using .toString("utf8") the decompressed data will be a valid domain that resolves to a single IP address.
3. Using dns.resolve() convert the domain into an IP address.
4. Remove the array wrapper and write the IP address to a file ip_address.txt
*/
const fs = require("fs");
const dns = require("dns");
const zlib = require("zlib");
const input_file = "./input/domain.deflated";
const output_file = "./output/ip_address.txt";

fs.readFile(input_file, after_read); 

function after_read(err, compressed_buffer){
    zlib.inflate(compressed_buffer, after_decompress); 
}

function after_decompress(err, buffer){
    let domain = buffer.toString("utf8"); 
    dns.resolve(domain, (err, records) => after_resolution(err, records, domain)); 
}

function after_resolution(err, records, domain){
    let results = `${records[0]}\t${domain}`; 
    fs.writeFile(output_file, results, () => console.log("Writing Complete")); 
}
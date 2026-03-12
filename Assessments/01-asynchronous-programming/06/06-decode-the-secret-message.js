/*
=======================
06-decode-the-secret-message.js
=======================
Student ID:
Comment (Required):

=======================
*/
const fs = require('fs');
const zlib = require('zlib');


const files = fs.readdirSync('input/').sort();
const n = files.length;
const buffers = new Array(n);  
let count = 0;

// Concurrently read and decompress all files
for (let i = 0; i < n; i++) {
    read_and_inflate(i, files[i]);
}

function read_and_inflate(index, filename) {
    fs.readFile('input/' + filename, {encoding: null}, function(err, data) {
        if (err) { console.log(err); return; }

        // Decompress the binary data
        zlib.inflate(data, function(err, buf) {
            if (err) { console.log(err); return; }

            // Store at original index — NOT push()
            buffers[index] = buf;
            count++;

            // Only proceed once ALL files are decompressed
            if (count === n) {
                after_all();
            }
        });
    });
}

function after_all() {
    // Merge all buffers IN ORDER, then write
    const merged = Buffer.concat(buffers);
    fs.writeFile('output/secret-message.zip', merged, function(err) {
        if (err) { console.log(err); return; }
        console.log('Done!');
    });
}

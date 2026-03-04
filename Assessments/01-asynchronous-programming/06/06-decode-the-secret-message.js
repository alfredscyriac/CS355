/*
=======================
06-decode-the-secret-message.js
=======================
Student ID:
Comment (Required):

=======================
*/
const fs = require("fs");
const zlib = require("zlib");
const files_dir = "./input/";
const files = fs.readdirSync(files_dir);

const n = input_files.length;	//input size 0 < n < 100

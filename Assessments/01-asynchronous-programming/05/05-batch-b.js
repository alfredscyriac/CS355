/*
=======================
05-batch-b.js
=======================
Student ID:
Comment (Required):

=======================
*/
const fs = require("fs");
const input_dir = "./input/";
const output_dir = "./output/";
const input_files = fs.readdirSync(input_dir);

const n = input_files.length;	//input size 0 < n < 100
const b = 5;					//input size 0 < b < n

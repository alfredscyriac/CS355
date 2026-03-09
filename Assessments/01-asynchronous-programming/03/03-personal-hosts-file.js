/*
Personal Hosts File
- Allowed Node.js API Functions: fs.readFile(), fs.writeFile(), dns.resolve()
- Disallowed: fs.appendFile()
- Input: File: domains.txt
    - Contains one valid domain name on each line
    - All supplied domains will only have a single IP addresses associated with it.
- Output: File hosts.txt

Write a program that reads from a file domains.txt residing in a directory input.  It contains a list of valid domains one on each line, resolve each domain found to IP addresses, and save the results into a file hosts.txt residing in a directory output.  The output format should be ip_address, a tab character (\t), domain_name.

The order in which the results appear does not matter.  (But see Ungraded Additional Question)
*/
const fs = require("fs");
const dns = require("dns");
const input_file = "./input/domains.txt";
const output_file = "./output/hosts.txt";

fs.readFile(input_file, "utf8", after_read);

function after_read(err, data){
    let domains = data.split("\n");
    let results = []; 

    for(let i = 0; i < domains.length; i++){
        resolve(i, domains, results);  
    }
}
function resolve(i, domains, results){
    dns.resolve(domains[i], after_resolution);
    function after_resolution(err, records){ 
        results.push(`${records[0]}\t${domains[i]}`); 
        if(results.length == domains.length){
            fs.writeFile(output_file, results.join("\n"), () => console.log("Finished Writing")); 
        }
    }
}

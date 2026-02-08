for(let i = 0; i <= 6; i++) {
    let line  = ""; 
    for(let j = 0; j <= 6; j++) {
        if (j <= i) {
            line += "#";
        } else {
            line += " "; 
        }
    }
    console.log(line); 
}
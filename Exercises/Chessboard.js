for (let i = 0; i <= 7; i++) {
    let line = ""; 
    for (let j = 0; j <= 7; j++) {
        if (j % 2 == 0) {
            if (i % 2 == 0) {
                line += " ";
            } else {
                line += "#"; 
            }
        } else {
            if (i % 2 == 0) {
                line += "#";
            } else {
                line += " "; 
            }
        }
    }
    console.log(line); 
}
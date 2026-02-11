function myRange(start,end) {
    let arr = []
    for(let i = start; i <= end; i++) {
        arr.push(i); 
    }
    return arr; 
}

function mySum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum; 
}

console.log(mySum(myRange(1,10))); 
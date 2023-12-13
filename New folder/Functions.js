function add(x, y) {return x + y;}
function mul(x, y) {return x * y;}
function sub(x, y) {return x - y;}
function div(x, y) {return x / y;}

let result1 = add(10, 20);
let result2 = sub(10, 20);
let result3 = mul(10, 20); 
let result4 = div(10, 20); 

let finalResult = mul(100,
    add(result1, sub(result2, result3))
    );
    

console.log(finalResult);
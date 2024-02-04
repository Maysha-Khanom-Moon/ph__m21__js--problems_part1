// swap: using temporaty variable

let a = 5;
let b = 7;

console.log(a, b);

let temp = a;
a = b;
b = temp;
console.log(a, b, '\n');


// ------ destructing ------
let x = 5;
let y = 7;
console.log(x, y);

// same type
[x, y] = [y, x]; // right
console.log(x, y, '\n');

// diff type
x = 'abc';
y = 5;
console.log(x, y);

[x, y] = [y, x]; // right
console.log(x, y);
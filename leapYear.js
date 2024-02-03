function lipi(n) {
    if(n % 400 === 0)
        return true;

    if(n % 100 && n%4 === 0)
        return true;
    return false;
}

console.log(lipi(2000));
console.log(lipi(1900));
console.log(lipi(2004));
console.log(lipi(2002));
console.log(lipi(1952));
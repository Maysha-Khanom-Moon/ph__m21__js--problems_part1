/**
 * ====> var ---> function-scoped
 * ====> ES6 (ES2015): let, const ---> block-scoped
 */

(function start() {
    for(var i = 0; i < 5; i++) {
        console.log(i);
        let j = 9;
    }

    console.log(i); // not block-scoped
    // console.log(j); block-scoped
})();

// console.log(i); function-scoped
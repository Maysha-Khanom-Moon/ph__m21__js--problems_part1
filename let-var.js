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


/**
 * ---- why shouldn't use var ----
 * 1. it's function-scoped which is unusual from others
 * 2. it become the global variable. it is become the window property of browser.
 * 3. as a global variable, sometimes it can be overwrite other's property.
 */
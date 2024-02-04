/**
 * ---------- Date properties ------------
 * 
 * ==> ('year-month-day')
 */

// today's date
const today = new Date();
console.log(today, '\n');

const date = new Date('2062-10-19');
console.log(date);
console.log(date.getMonth());
console.log(date.getDay(), '\n');

date.setMonth(6);
date.setDate(21)
date.setFullYear(2002);
console.log(date);


/**
 * ==> toLocaleString
 * ==> GB: day/ month/ year
 * ==> US: month/day/year
 */
console.log(date.toLocaleString('en-GB')); // Great Britain
console.log(date.toLocaleString('en-US')); // United State


/**
 * unix epoch: count the seconds form 00:00:00 UTC on 1 January 1970
 */
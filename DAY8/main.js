"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// question22 INTERNATIONAL EROR
let friends = ["amna", "sadia", "mehak", "saeeda"];
console.log(friends[4]); // international Error
console.log(friends[3]); // correcting Error
//QUESTION23 CONDITIONAL TEST
let num1 = 6;
let num2 = 3;
console.log(num1 == num2); //false
console.log(num1 != 2); //true
console.log(num1 < num2); //false
console.log(num1 > num2); //true
console.log(num1 > 3); //true
console.log(num1 <= num2); //false
console.log(num1 * num2 != num1); //true
console.log(num2 * num1 == num2); //false
console.log(num1 / num2 == num2); //false
console.log(num2 / num1 != num1); //true
// question24 more conditions
//testing with striNG
console.log("testing equality with string");
console.log("apple" == "apple"); // true
console.log("apple" != "apple"); //false
//testing with lower case function
console.log("testing with lower case");
console.log("Apple".toLowerCase() == "apple"); //true
console.log("apple".toLowerCase() != "Apple"); //true
//testing with numerically
console.log("testing with numerical test");
console.log(10 > 2); // true
console.log(5 < 9); // false
//testing with && and ||
console.log("testing with and or ");
console.log("true" && "false"); //false
console.log("true" || "false"); // true
// test whether an item is in array
let fruits = ["apple", "mango", "banana"];
console.log("is 'apple' is in fruits?");
console.log(fruits.includes('apple')); //true
//testing whether is not in array
console.log("is 'cherry' is in fruits?");
console.log(!fruits.includes('cherry')); //true

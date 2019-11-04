// Напишите функцию isInteger(num), которая возвращает true, если num – целое число, иначе false.
// The parseFloat() function parses a string and returns a floating point number.
let num = parseFloat(prompt("Please any number"));
console.log(num);
debugger;
function isInteger(a) {
  if (a === (a ^ 0)) {
    console.log("true");
  } else {
    console.log("false");
  }
}

isInteger(num);

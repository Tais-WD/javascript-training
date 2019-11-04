// console.log("Hello dude!");
// function checkAge(age) {
//   return age > 18 ? true : confirm("Родители разрешили?");
// }
// checkAge(12);
// function minNumber(a, b) {
//   return a < b ? console.log(a) : console.log(b);
// }

// minNumber(2, 23);

function pow(x, n) {
  let number = x;
  for (let index = 1; index < n; index++) {
    let result = number * x;
    number = result;
    console.log(number);
  }
}
pow(5, 5);

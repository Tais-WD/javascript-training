let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let salaries1 = {
  John: 1005,
  Ann: 1606,
  Pete: 1302
};
let array = [];

function calcSum(obj) {
  let sum = 0;
  for (let key in obj) {
    // salary = key.obj;

    sum += obj[key];

    // console.log(sum);
  }
  console.log(sum);
  array.push(sum);
}
calcSum(salaries);

calcSum(salaries1);
console.log(array);

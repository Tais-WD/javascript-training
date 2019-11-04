// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false
function isEmpty(obj) {
  for (let key in obj) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    console.log("false");
  }
  return console.log("true");
}
let cat = {
  age: 10,
  color: "Black"
};
let cat2 = {
  age: 10,
  color: "Black"
};
let dog = {};
isEmpty(cat);
// isEmpty(dog);
// isEmpty(cat2);

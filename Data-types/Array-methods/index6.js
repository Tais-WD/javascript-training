// task number 9
// Отсортировать пользователей по возрасту
// важность: 5
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let arr1 = [vasya, petya, masha];
console.log(arr1);
arr1.sort(function(a, b) {
  return a.age - b.age;
});
console.log("a" > 12);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

arr.sort(function(a, b) {
  return a - b;
});
console.log(arr);

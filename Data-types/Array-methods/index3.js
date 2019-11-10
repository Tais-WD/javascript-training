// Task number four.
// Сортировать в порядке по убыванию

// let arr = [5, 2, 1, -10, 8];

// // ... ваш код для сортировки по убыванию

// alert( arr ); // 8, 5, 2, 1, -10
let arr = [5, 2, 1, -10, 8];
let arr1 = [1, -2, 15, 2, 0, 8];
function compareNumbers(a, b) {
  if (a > b) return -1;
  if (a == 0) return 0;
  if (a < b) return 1;
}
arr.sort(compareNumbers);
console.log(arr);
// more smart from the book
// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert( arr );

// task number 5

// Скопировать и отсортировать массив

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.
//
let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

function copySorted(arr) {
  return arr.slice().sort();
}
let sorted = copySorted(arr);
console.log(sorted);

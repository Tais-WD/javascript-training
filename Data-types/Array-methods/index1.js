// Second task
// Фильтрация по диапазону

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)
let arr = [5, 3, 8, 1];
function filterRange(arr, a, b) {
  return arr.filter(value => value >= a && value <= b);
}
let filtered = filterRange(arr, 1, 4);
console.log(filtered);

// массив filtered равен [12, 130, 44]
